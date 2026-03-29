import "../globals.css";

import SmoothScrolling from "@/components/smooth-scrolling";

export default function RootLayout({
																		 children,
																	 }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<body>
			<main>
				<SmoothScrolling>
					{children}
				</SmoothScrolling>
			</main>
		</body>
	);
}
