import clsx from "clsx";
import type { ReactNode } from "react";

export type ButtonProps = {
	children: ReactNode;
	className?: string;
	href?: string;
	variant?: "accent";
};

export function Button({ children, className, href, variant }: ButtonProps) {
	return (
		<a
			className={clsx(
				className,
				"inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-90",
				variant === "accent"
					? "hover:opacity-90 focus:ring-orange-400 text-gray-900 bg-[#ffb757]"
					: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
			)}
			href={href}
		>
			{children}
		</a>
	);
}
