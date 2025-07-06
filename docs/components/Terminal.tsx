import { useEffect, useState } from "react";

export function Terminal() {
	const [showCursor, setShowCursor] = useState(true);
	const [currentStep, setCurrentStep] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const [completedSteps, setCompletedSteps] = useState([]);

	const steps = [
		{ type: "command", text: "bun install -g orbiter-cli", delay: 80 },
		{ type: "response", text: "orbiter installed", delay: 60 },
		{ type: "command", text: "orbiter auth", delay: 80 },
		{ type: "response", text: "API Key stored successfully!", delay: 60 },
		{ type: "command", text: "orbiter new --template bhvr", delay: 80 },
		{ type: "response", text: "✔ Template downloaded", delay: 40 },
		{ type: "response", text: "✔ Build completed", delay: 40 },
		{ type: "response", text: "✔ Client deployed", delay: 40 },
		{ type: "response", text: "✔ Server deployed", delay: 40 },
		{
			type: "response",
			text: "✔ App available at: https://mysite.orbiter.website",
			delay: 40,
		},
	];

	// Blinking cursor effect
	useEffect(() => {
		const interval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 530);
		return () => clearInterval(interval);
	}, []);

	// Typing animation
	useEffect(() => {
		if (currentStep >= steps.length) return;

		const step = steps[currentStep];
		let charIndex = 0;
		setIsTyping(true);
		setCurrentText("");

		const typeInterval = setInterval(() => {
			if (charIndex < step.text.length) {
				setCurrentText(step.text.substring(0, charIndex + 1));
				charIndex++;
			} else {
				clearInterval(typeInterval);
				setIsTyping(false);

				// Add completed step after a brief pause
				setTimeout(
					() => {
						setCompletedSteps((prev: any) => [...prev, step]);
						setCurrentText("");
						setCurrentStep((prev) => prev + 1);
					},
					step.type === "command" ? 800 : 500,
				);
			}
		}, step.delay);

		return () => clearInterval(typeInterval);
	}, [currentStep]);

	// Auto-restart animation
	useEffect(() => {
		if (currentStep >= steps.length) {
			const timeout = setTimeout(() => {
				setCurrentStep(0);
				setCompletedSteps([]);
				setCurrentText("");
			}, 10000);
			return () => clearTimeout(timeout);
		}
	}, [currentStep]);

	const renderLine = (step: any, index: any) => {
		if (step.type === "command") {
			return (
				<div key={index} className="flex items-center mt-4">
					<span className="text-[#FFB757]">❯</span>
					<span className="text-gray-300 ml-2">{step.text}</span>
				</div>
			);
		} else {
			return (
				<div key={index} className="text-white mt-1 ml-4">
					<span className="text-[#FFB757]">✔</span>{" "}
					{step.text.replace("✔ ", "")}
				</div>
			);
		}
	};

	return (
		<div className="w-full max-w-2xl mx-auto bg-transparent rounded-xl shadow-2xl overflow-hidden">
			{/* Window header */}
			<div className="bg-[#121113] px-4 py-3 flex items-center justify-between">
				{/* Traffic lights */}
				<div className="flex items-center space-x-2">
					<div className="w-3 h-3 bg-red-500 rounded-full"></div>
					<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div className="w-3 h-3 bg-green-500 rounded-full"></div>
				</div>
				{/* Empty space for symmetry */}
				<div className="w-16"></div>
			</div>
			{/* Terminal content */}
			<div className="bg-[#121113] p-6 min-h-96 font-mono text-sm">
				{/* Completed steps */}
				{completedSteps.map((step, index) => renderLine(step, index))}

				{/* Current typing step */}
				{currentStep < steps.length && (
					<div className="flex items-center mt-4">
						{steps[currentStep].type === "command" ? (
							<>
								<span className="text-[#FFB757]">❯</span>
								<span className="text-gray-300 ml-2">{currentText}</span>
								<span
									className={`ml-1 w-2 h-4 bg-gray-300 ${
										showCursor && isTyping ? "opacity-100" : "opacity-0"
									}`}
								></span>
							</>
						) : (
							<div className="text-white ml-4">
								<span className="text-[#FFB757]">✔</span>{" "}
								{currentText.replace("✔ ", "")}
								<span
									className={`ml-1 w-2 h-4 bg-white inline-block ${
										showCursor && isTyping ? "opacity-100" : "opacity-0"
									}`}
								></span>
							</div>
						)}
					</div>
				)}

				{/* Final cursor when animation is complete */}
				{currentStep >= steps.length && (
					<div className="flex items-center mt-4">
						<span className="text-[#FFB757]">❯</span>
						<span
							className={`ml-2 w-2 h-4 bg-gray-300 ${
								showCursor ? "opacity-100" : "opacity-0"
							}`}
						></span>
					</div>
				)}
			</div>
		</div>
	);
}
