import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuTrigger,
} from "./navigation-menu";

const data = require("@/constants/category-mock");

const DropdownItem = ({
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
	const hasSubCategories = item.categories?.length > 0;

	return (
		<li>
			<div className="flex items-center gap-2">
				<Link
					href={link}
					className={cn(
						"flex w-full items-center justify-between rounded p-2 text-base",
						"hover:bg-secondary ",
						isOpen && "bg-white underline decoration-primary/50",
					)}
				>
					<span>{item.name}</span>
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
					{item.categories?.map((subItem: any) => (
						<DropdownItem
							key={subItem.id}
							item={subItem}
							level={level + 1}
							link={subItem.page_url}
						/>
					))}
				</ul>
			)}
		</li>
	);
};

export const NestedDropdown = () => {
	return (
		<NavigationMenuItem>
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
						{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
						{data.data.map((product: any) => (
							<DropdownItem
								key={product.id}
								item={product}
								link={product.page_url}
							/>
						))}
					</ul>
				</div>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
};

export default NestedDropdown;
