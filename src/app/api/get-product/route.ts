import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const product = new URL(request.url).searchParams.get("product");

	const headersList = {
		Accept: "*/*",
		"Accept-Encoding": "gzip, deflate, br, zstd",
		"Accept-Language": "en-US,en;q=0.9",
		"Api-Key": "6620bf6bccc793f67982eec5",
		"Classification-Id": "1",
		Connection: "keep-alive",
		"Content-Type": "application/json",
		Host: "datawomb.com",
		Origin: "https://valvesonly.com",
		Referer: "https://valvesonly.com/",
		"Sec-Fetch-Dest": "empty",
		"Sec-Fetch-Mode": "cors",
		"Sec-Fetch-Site": "cross-site",
		"User-Agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
		"sec-ch-ua": `"Not/A)Brand";v="8", "Chromium";v="126","Microsoft Edge";v="126""`,
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": `"Windows"`,
	};

	const response = await fetch(
		`https://datawomb.com/ecommser/products/categories/${product}`,
		{
			method: "GET",
			headers: headersList,
			cache: "force-cache",
		},
	);

	const data = await response.json();
	return NextResponse.json(data);
}
