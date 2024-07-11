"use client";

import { AutosizeTextarea } from "@/components/ui/autoResizeTextArea";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
const formSchema = z.object({
	name: z.string({ message: "Name Required" }).min(1, {
		message: "Name required.",
	}),
	email: z.string({ message: "Email Required" }).email({
		message: "Invalid email address",
	}),
	description: z.string({ message: "Message Required" }).min(5, {
		message: "Message must be at least 5 characters.",
	}),
});

export function InquiryForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	// 2. Define the mutation.
	const mutation = useMutation({
		mutationFn: async (values: z.infer<typeof formSchema>) => {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});
			if (!response.ok) {
				throw new Error("Failed to send inquiry");
			}
			return response.json();
		},
		onSuccess: () => {
			form.reset();
			setOpen(false);
			toast.success("Thank you for your inquiry!");
		},
		onError: () => {
			form.reset();
			setOpen(false);
			toast.error("Failed to send inquiry. Please try again.");
		},
	});

	// 3. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		mutation.mutate(values);
	}

	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger
				className={cn(
					"w-full cursor-none px-4 py-2 opacity-0",
					"bg-primary text-primary-foreground",
					"transition-all duration-600 ease-in-out",
					"group-hover:cursor-pointer group-hover:opacity-100",
				)}
			>
				Custom Enquiry
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Send us an email</DialogTitle>
					<DialogDescription className="pt-6">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
							>
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Your Name <span className="text-destructive">*</span>
											</FormLabel>
											<FormControl>
												<Input placeholder="Enter your name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Your Email <span className="text-destructive">*</span>
											</FormLabel>
											<FormControl>
												<Input placeholder="Enter your name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="description"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Your Message <span className="text-destructive">*</span>
											</FormLabel>
											<FormControl>
												<AutosizeTextarea
													className="no-scrollbar resize-none text-pretty pr-8"
													placeholder="Enter your message"
													minHeight={100}
													maxHeight={200}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button type="submit" disabled={mutation.isPending}>
									{mutation.isPending ? (
										<Loader2 className="mx-6 animate-spin" />
									) : (
										"Submit"
									)}
								</Button>
							</form>
						</Form>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
