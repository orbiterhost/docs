import { Button } from "./Button";

export function PricingTable() {
	return (
		<div className="flex flex-col items-center justify-center h-full gap-12">
			<h1 className="font-black text-5xl">Pricing</h1>
			<div className="flex sm:flex-row flex-col gap-6 justify-center items-start w-full">
				<div className=" text-white w-[300px] bg-[#121113] rounded-lg shadow-md">
					<div className="flex flex-col space-y-1.5 p-6">
						<h3 className="text-2xl font-semibold leading-none tracking-tight">
							{" "}
							Free{" "}
						</h3>
						<p className="text-xs text-[#A3A3A4]"> $0/month </p>
					</div>
					<div className="p-6 pt-0 flex text-sm flex-col justify-between gap-28">
						<ul className="list-disc ml-4 space-y-2">
							<li>2 projects</li>
							<li>1 team member</li>
							<li>Free subdomain</li>
							<li>20k requests per month</li>
						</ul>
						<a className="w-full" href="https://app.orbiter.host">
							<Button>Sign Up</Button>
						</a>
					</div>
				</div>

				<div className="w-[300px] text-white bg-[#121113] rounded-lg shadow-md">
					<div className="flex flex-col space-y-1.5 p-6">
						<h3 className="text-2xl font-semibold leading-none tracking-tight">
							{" "}
							Launch{" "}
						</h3>
						<p className="text-xs text-[#A3A3A4]">
							{" "}
							$7/month (when paid annually){" "}
						</p>
						<p className="text-xs text-[#A3A3A4]"> $9/month </p>
					</div>
					<div className="p-6 pt-0 flex flex-col text-sm justify-between gap-12">
						<ul className="list-disc ml-4 space-y-2">
							<li className="underline font-bold text-[#FFB757]">
								Support independent hosting
							</li>
							<li>Unlimited projects</li>
							<li>3 collaborators</li>
							<li>Custom domain</li>
							<li>Custom redirects support</li>
							<li>Custom 404 page support</li>
							<li>Serverless functions</li>
							<li>4 million requests per month</li>
							<li>5 million ms CPU time per month</li>
						</ul>
						<a className="w-full" href="https://app.orbiter.host">
							<Button>Sign Up</Button>
						</a>
					</div>
				</div>

				<div className="text-white w-[300px] bg-[#121113] rounded-lg shadow-sm">
					<div className="flex flex-col space-y-1.5 p-6">
						<h3 className="text-2xl font-semibold leading-none tracking-tight">
							{" "}
							Orbit{" "}
						</h3>
						<p className="text-xs text-[#A3A3A4]">
							{" "}
							$16/month (when paid annually){" "}
						</p>
						<p className="text-xs text-[#A3A3A4]"> $19/month </p>
					</div>
					<div className="p-6 pt-0 text-sm flex flex-col justify-between gap-4">
						<ul className="list-disc ml-4 space-y-2">
							<li className="underline font-bold text-[#FFB757]">
								Support independent hosting
							</li>
							<li>Unlimited projects</li>
							<li>Unlimited collaborators</li>
							<li>Custom domain</li>
							<li>Custom redirects support</li>
							<li>Custom 404 page support</li>
							<li>Serverless functions</li>
							<li>10 million requests per month</li>
							<li>10 million ms CPU time per month</li>
						</ul>
						<a className="w-full" href="https://app.orbiter.host">
							<Button>Sign Up</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
