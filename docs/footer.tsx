export default function Footer() {
	return (
    <div className="text-xs text-gray-500 flex flex-col items-center gap-2">
      <p>&copy; {new Date().getFullYear()} Orbiter Hosting, LLC. All rights reserved.</p>
      <div className="flex flex-row items-center gap-4">
      <a href="/terms">Terms and Conditions</a>
      <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
	);
}
