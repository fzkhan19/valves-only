"use client";

import { DropdownItem } from "@/components/ui/nested-dropdown";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
	return await fetch("/api/get-products").then((res) => res.json());
};
export default function ProductsCategory() {
	const { data: products } = useQuery({
		queryKey: ["products"],
		queryFn: () => getProducts(),
	});
	return (
		<div>
			<ul className="flex h-[60vh] w-[200px] flex-col gap-2 overflow-y-scroll py-2">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{products?.data.map((product: any) => (
					<DropdownItem
						key={product.id}
						item={product}
						link={product.perma_link}
					/>
				))}
			</ul>
		</div>
	);
}
