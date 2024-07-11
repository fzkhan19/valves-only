"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function Collapsible({ data }: { data: any }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex flex-col gap-3">
			<div className={open ? "" : "line-clamp-6"}>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="text-pretty"
					/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
					dangerouslySetInnerHTML={{ __html: data.description }}
					onClick={() => setOpen(true)}
				/>
			</div>
			<Button
				variant="secondary"
				className="self-end rounded text-xs"
				size="sm"
				onClick={() => setOpen(!open)}
			>
				{open ? "Read Less" : "Read More"}
			</Button>
		</div>
	);
}
