import { useState } from "react";
import { Button } from "./Button";

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
		<main className="flex w-full h-full mx-auto flex-col items-center justify-center gap-12 p-4">
			<div className="flex flex-col items-center gap-12">
				<h1 className="text-center text-6xl font-black">
					Free Your App from Vendor Lock-in
				</h1>
				<h3 className="text-center text-2xl font-semibold">
					Open Source Web Hosting Without Walled Gardens
				</h3>
			</div>
			<div className="w-full max-w-[260px] flex flex-col items-center gap-8">
				<div className="relative w-full rounded-lg bg-zinc-800 p-4 overflow-hidden">
					<pre className="text-sm font-mono">
						<code>npm i -g orbiter-cli</code>
					</pre>
					<button
						type="button"
						className="absolute top-3 right-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
						onClick={copyToClipboard}
					>
						{copied ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-4 w-4"
							>
								<title>svg</title>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-4 w-4"
							>
								<title>svg</title>

								<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
								<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
							</svg>
						)}
					</button>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<Button variant="accent" href="https://app.orbiter.host">
					Get Started
				</Button>
				<Button href="/quickstart">Docs</Button>
			</div>
		</main>
	);
}
