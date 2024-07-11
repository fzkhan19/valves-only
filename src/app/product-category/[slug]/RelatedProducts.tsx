"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { InquiryForm } from "../../../components/InquiryForm";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function RelatedProducts({ products }: { products: any[] }) {
	const [page, setPage] = useState(1);
	const productsPerPage = 6;

	if (!products) return <div>No products available</div>;

	const totalPages = Math.ceil(products.length / productsPerPage);

	const currentProducts = products.slice(
		(page - 1) * productsPerPage,
		page * productsPerPage,
	);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between gap-4">
				<h1 className="font-bold text-base">Related Products</h1>
				<div className="mt-4 flex w-max items-center justify-between gap-4">
					<Button
						onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
						className="h-fit rounded p-1"
						disabled={page === 1}
						variant="secondary"
					>
						<ChevronLeft size={20} />
					</Button>
					<span className="text-sm">
						{page} of {totalPages}
					</span>
					<Button
						onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
						className="h-fit rounded p-1"
						disabled={page === totalPages}
						variant="secondary"
					>
						<ChevronRight size={20} />
					</Button>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{currentProducts.map((product: any) => (
					<Card key={product.id} className="group">
						<CardContent className="flex h-full flex-col items-center gap-2 px-0 pb-0">
							<Link
								href={`/product/${product.perma_link}`}
								className="flex h-full flex-col items-center gap-4"
							>
								<div className="mx-2 flex size-3/4 grow items-center justify-center">
									<Image
										alt={product.name}
										src={product.image}
										width={200}
										height={100}
									/>
								</div>
								<div className="flex w-full flex-col justify-between gap-3 px-6 py-2">
									<Label className="text-base uppercase tracking-tight">
										{product.name}
									</Label>
									<Label className="font-bold text-base uppercase">
										${product.price}
									</Label>
								</div>
							</Link>
							<InquiryForm />
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
