import { HEADERS_LIST } from "@/constants/api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const payload = await request.json();

	console.log(payload);

	const response = await fetch(
		"https://datawomb.com/ecommser/products/contact",
		{
			method: "POST",
			//@ts-expect-error Header type
			headers: HEADERS_LIST,
			body: JSON.stringify(payload),
		},
	);

	const apiResponse = await response.json();

	return NextResponse.json(apiResponse);
}
