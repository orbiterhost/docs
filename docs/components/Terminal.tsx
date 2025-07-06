import { useEffect, useState } from "react";

export function Terminal() {
	const [showCursor, setShowCursor] = useState(true);

	// Blinking cursor effect
	useEffect(() => {
		const interval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 530);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full max-w-2xl mx-auto bg-transparent rounded-lg shadow-2xl overflow-hidden">
			{/* Window header */}
			<div className="bg-[#121113] px-4 py-3 flex items-center justify-between">
				{/* Traffic lights */}
				<div className="flex items-center space-x-2">
					<div className="w-3 h-3 bg-red-500 rounded-full"></div>
					<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div className="w-3 h-3 bg-green-500 rounded-full"></div>
				</div>

				{/* Window title */}
				<div className="text-gray-300 text-sm font-medium">~</div>

				{/* Empty space for symmetry */}
				<div className="w-16"></div>
			</div>

			{/* Terminal content */}
			<div className="bg-[#121113] p-6 min-h-96 font-mono text-sm">
				<div className="text-green-400">
					<span className="text-gray-300">~</span>
				</div>
				<div className="flex items-center mt-1">
					<span className="text-[#FFB757]">❯</span>
					<span className="text-gray-300 ml-2">orbiter deploy</span>
					<span
						className={`ml-1 w-2 h-4 bg-gray-300 ${showCursor ? "opacity-100" : "opacity-0"}`}
					></span>
				</div>
			</div>
		</div>
	);
}
