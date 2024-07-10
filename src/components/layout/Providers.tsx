import type { ReactNode } from "react";

import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider
			disableTransitionOnChange
			enableSystem
			attribute="class"
			defaultTheme="system"
		>
			{children}
		</ThemeProvider>
	);
};

export default Providers;
