import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";
import Collapsible from "./Collapsible";
import ProductsCategory from "./ProductsCategory";
import RelatedProducts from "./RelatedProducts";
const getProducts = async () => {
	return await fetch("/api/get-products").then((res) => res.json());
};

export default async function Page({ params }: { params: { slug: string } }) {
	const response = await fetch(
		`http://localhost:3000/api/get-product?product=${params.slug}`,
	);
	const data = (await response.json()).data;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["posts"],
		queryFn: getProducts,
	});
	const breadcrumbs = [
		{ name: "Home", href: "/" },
		{ name: "Category", href: "/shop" },
	];

	return (
		<section className="mx-auto max-w-7xl p-24 px-32">
			<Breadcrumb>
				<BreadcrumbList>
					{breadcrumbs.map(({ name, href }) => (
						<>
							<BreadcrumbItem key={href}>
								<BreadcrumbLink
									href={href}
									className="font-semibold text-base uppercase"
								>
									{name}
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator key={name} />
						</>
					))}
					<BreadcrumbItem>
						<BreadcrumbPage className="font-semibold text-base uppercase">
							{params.slug}
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="my-8 flex gap-8">
				<HydrationBoundary state={dehydrate(queryClient)}>
					<ProductsCategory />
				</HydrationBoundary>
				<div className="flex flex-col gap-8">
					<div>
						<h1 className="font-bold text-2xl">{data.name}</h1>
					</div>
					<div className="mt-4 flex flex-col gap-4">
						{data.description && <Collapsible data={data} />}
					</div>
					<RelatedProducts products={data.products} />
				</div>
			</div>
		</section>
	);
}
