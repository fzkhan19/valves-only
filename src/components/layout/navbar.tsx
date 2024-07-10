"use client";
import { Menu, Vote } from "lucide-react";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

import { PRODUCT_TITLE } from "@/constants/content";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "../ui/navigation-menu";
import NestedDropdown from "../ui/nested-dropdown";
import { ToggleTheme } from "./toggle-theme";

interface RouteProps {
	href: string;
	label: string;
}

interface FeatureProps {
	id: number;
	name: string;
	page_url: string;
	perma_link: string;
	categories: string[];
}

const routeList: RouteProps[] = [
	{
		href: "",
		label: "WHO WE ARE",
	},
	{
		href: "",
		label: "BLOG",
	},
	{
		href: "",
		label: "ONLINE QUOTE REQUEST",
	},
	{
		href: "",
		label: "CONTACT US",
	},
];

const productList = require("@/constants/category-mock").data;

export const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header
			className={cn(
				"sticky top-0 z-10",
				"flex w-full items-center justify-center",
				"border-0 p-4",
				"shadow-[0_0px_10px_rgb(0,0,0,0.2)] shadow-primary/30",
				"bg-white/20 saturate-150 backdrop-blur backdrop-contrast-125 dark:bg-black/20",
			)}
		>
			<Link className="flex items-center px-2 font-bold text-lg" href="/">
				{PRODUCT_TITLE}
			</Link>

			{/* <!-- Mobile --> */}
			<div className="flex items-center lg:hidden">
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Menu
							className="cursor-pointer lg:hidden"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</SheetTrigger>
					<SheetContent
						className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl border-secondary bg-card"
						side="left"
					>
						<div>
							<SheetHeader className="mb-4 ml-4">
								<SheetTitle className="flex items-center">
									<Link className="flex items-center" href="/">
										<Vote className="mr-2 h-9 w-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/80 to-primary text-primary-foreground" />
										{PRODUCT_TITLE}
									</Link>
								</SheetTitle>
							</SheetHeader>

							<div className="flex flex-col gap-2">
								{routeList.map(({ href, label }) => (
									<Button
										key={href}
										asChild
										className="justify-start text-base"
										variant="ghost"
										onClick={() => setIsOpen(false)}
									>
										<Link href={href}>{label}</Link>
									</Button>
								))}
							</div>
						</div>

						<SheetFooter className="flex-col items-start justify-start sm:flex-col">
							<Separator className="mb-2" />
							<ToggleTheme />
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>

			{/* <!-- Desktop --> */}
			<NavigationMenu className="mx-auto hidden lg:block">
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href={"/"} className="px-2 font-semibold text-xs opacity-70">
							HOME
						</Link>
					</NavigationMenuItem>

					<NestedDropdown />

					<NavigationMenuItem>
						{routeList.map(({ href, label }) => (
							<NavigationMenuLink key={href} asChild>
								<Link
									href={href}
									className="px-2 font-semibold text-xs opacity-70"
								>
									{label}
								</Link>
							</NavigationMenuLink>
						))}
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<div className="hidden items-center lg:flex">
				<ToggleTheme />
			</div>
		</header>
	);
};
