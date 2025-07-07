interface AvatarProps {
	src: string;
	alt: string;
}
export function Avatar({ src, alt }: AvatarProps) {
	return <img className="w-24 h-24 rounded-full" src={src} alt={alt} />;
}
