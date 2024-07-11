import { HEADERS_LIST } from "@/constants/api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const product = new URL(request.url).searchParams.get("product");

	let data = "";
	if (!(product && product.length > 0)) {
		const response = await fetch(
			"https://datawomb.com/ecommser/products/categories",
			{
				method: "GET",
				// @ts-expect-error Header type
				headers: HEADERS_LIST,
				cache: "force-cache",
			},
		);

		data = await response.json();
	} else {
		const response = await fetch(
			`https://datawomb.com/ecommser/products?term=${product}`,
			{
				method: "GET",
				// @ts-expect-error Header type
				headers: HEADERS_LIST,
				cache: "force-cache",
			},
		);

		data = await response.json();
	}
	return NextResponse.json(data);
}
