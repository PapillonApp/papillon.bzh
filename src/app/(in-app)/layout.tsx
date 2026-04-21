import "../globals.css";
import "@fontsource/sn-pro/500.css";
import "@fontsource/sn-pro/600.css";
import "@fontsource/sn-pro/700.css";

import SmoothScrolling from "@/components/smooth-scrolling";

export default function RootLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<SmoothScrolling>
				{children}
			</SmoothScrolling>
		</>
	);
}
