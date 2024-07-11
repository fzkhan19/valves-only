"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import {
	NavigationMenuContent,
	NavigationMenuTrigger,
} from "./navigation-menu";

export const DropdownItem = ({
	item,
	level = 0,
	link,
}: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	item: any;
	level?: number;
	link: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const hasSubCategories =
		item.second_categories?.length > 0 ||
		item.third_categories?.length > 0 ||
		item.fourth_categories?.length > 0;

	return (
		<li>
			<div className="flex items-center gap-2">
				<Link
					href={`/product-category/${link}`}
					className={cn(
						"flex w-full items-center justify-between rounded p-2 text-base",
						"hover:bg-secondary",
						isOpen && "bg-white underline decoration-primary/50",
					)}
				>
					{item.name}
				</Link>
				<Button
					onClick={() => setIsOpen(!isOpen)}
					variant="ghost"
					className="rounded p-2"
				>
					{hasSubCategories && !isOpen && <ChevronDown />}
					{hasSubCategories && isOpen && <ChevronUp />}
				</Button>
			</div>
			{isOpen && hasSubCategories && (
				<ul className={"pl-6"}>
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{item.second_categories?.map((subItem: any) => (
						<DropdownItem
							key={subItem.id}
							item={subItem}
							level={level + 1}
							link={subItem.perma_link}
						/>
					))}
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{item.third_categories?.map((subItem: any) => (
						<DropdownItem
							key={subItem.id}
							item={subItem}
							level={level + 1}
							link={subItem.perma_link}
						/>
					))}
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{item.fourth_categories?.map((subItem: any) => (
						<DropdownItem
							key={subItem.id}
							item={subItem}
							level={level + 1}
							link={subItem.perma_link}
						/>
					))}
				</ul>
			)}
		</li>
	);
};

interface FeatureProps {
	id: number;
	name: string;
	page_url: string;
	perma_link: string;
	categories: string[];
}

export const NestedDropdown = ({
	products = [],
}: {
	products: FeatureProps[] | undefined;
}) => {
	return (
		<>
			<NavigationMenuTrigger
				className={cn(
					"h-fit bg-transparent p-0 font-semibold text-xs opacity-70",
					"hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
				)}
			>
				OUR PRODUCT RANGE
			</NavigationMenuTrigger>
			<NavigationMenuContent>
				<div className="grid h-[600px] w-[600px] grid-cols-1 gap-5 overflow-y-scroll p-4">
					<ul className="flex flex-col gap-2">
						{products?.map((product: FeatureProps) => (
							<DropdownItem
								key={product.id}
								item={product}
								link={product.perma_link}
							/>
						))}
					</ul>
				</div>
			</NavigationMenuContent>
		</>
	);
};

export default NestedDropdown;
