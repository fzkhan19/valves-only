import { HEADERS_LIST } from "@/constants/api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const product = new URL(request.url).searchParams.get("product");

	const response = await fetch(
		`https://datawomb.com/ecommser/products/categories/${product}`,
		{
			method: "GET",
			// @ts-expect-error header type
			headers: HEADERS_LIST,
			cache: "force-cache",
		},
	);

	const data = await response.json();
	return NextResponse.json(data);
}
