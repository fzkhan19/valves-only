import Providers from "@/components/layout/Providers";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Valves Only",
	description: "Your one stop shop for all your Valves needs.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					<main className="overflow-x-hidden overflow-y-scroll scroll-smooth">
						{children}
					</main>
					<Toaster position="top-right" richColors closeButton />
					<footer>
						<Footer />
					</footer>
				</Providers>
			</body>
		</html>
	);
}
