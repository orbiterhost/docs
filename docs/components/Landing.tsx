import { useState } from "react";
import { Button } from "./Button";
import { Terminal } from "./Terminal";
import NewsletterForm from "./NewsletterForm";

export function Landing() {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText("npm i -g orbiter-cli");
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
		<main
			className="flex w-full sm:h-[85vh] min-h-[85vh] mt-6 mx-auto flex-col items-center justify-center gap-12 p-4 relative"
			style={{
				backgroundImage: "url('/bg.png')",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				zIndex: 0,
			}}
		>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundColor: "rgba(18, 17, 19, 0.7)",
					zIndex: -1,
				}}
			/>

			<div className="flex flex-col items-center gap-12">
				<h1 className="text-center sm:text-6xl text-4xl font-black">
					Free Your App from Vendor Lock-in
				</h1>
				<h3 className="text-center sm:text-2xl text-lg font-semibold">
					Open Source Web Hosting Without Walled Gardens
				</h3>
			</div>
			<Terminal />
			<div className="flex items-center gap-4">
				<Button type="link" variant="accent" href="https://app.orbiter.host">
					Get Started
				</Button>
				<Button type="link" href="/quickstart">
					Docs
				</Button>
			</div>
			<div className="flex items-center flex-col gap-2 justify-center">
				<p className="font-bold">Signup for our Newsletter</p>
				<NewsletterForm />
			</div>
		</main>
	);
}
