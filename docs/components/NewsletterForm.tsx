////////////////
//
// Using Framer?
// See https://www.framer.com/learn/code-components/ for more info
//
////////////////

import { useState } from "react";
import { Button } from "./Button";

const INIT = "INIT";
const SUBMITTING = "SUBMITTING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS] as const;
const formStyles = {
	id: "cm683sfoj04xyi3ic8azyb4a3",
	name: "Default",
	formStyle: "inline",
	placeholderText: "you@example.com",
	formFont: "Inter",
	formFontColor: "#D1D5DB",
	formFontSizePx: 14,
	buttonText: "Subscribe",
	buttonFont: "Inter",
	buttonFontColor: "#D0CFD0",
	buttonColor: "#121113",
	buttonFontSizePx: 14,
	successMessage: "You're subscribed!",
	successFont: "Inter",
	successFontColor: "#ffffff",
	successFontSizePx: 14,
	userGroup: "",
	team: {
		mailingLists: [],
	},
};
const domain = "app.loops.so";

export default function NewsletterForm() {
	const [email, setEmail] = useState("");
	const [formState, setFormState] = useState<(typeof formStates)[number]>(INIT);
	const [errorMessage, setErrorMessage] = useState("");
	const [fields, setFields] = useState({});

	const resetForm = () => {
		setEmail("");
		setFormState(INIT);
		setErrorMessage("");
	};

	/**
	 * Rate limit the number of submissions allowed
	 * @returns {boolean} true if the form has been successfully submitted in the past minute
	 */
	const hasRecentSubmission = () => {
		const time = new Date();
		const timestamp = time.valueOf();
		const previousTimestamp = localStorage.getItem("loops-form-timestamp");

		// Indicate if the last sign up was less than a minute ago
		if (
			previousTimestamp &&
			Number(previousTimestamp) + 60 * 1000 > timestamp
		) {
			setFormState(ERROR);
			setErrorMessage("Too many signups, please try again in a little while");
			return true;
		}

		localStorage.setItem("loops-form-timestamp", timestamp.toString());
		return false;
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// Prevent the default form submission
		event.preventDefault();

		// boundary conditions for submission
		if (formState !== INIT) return;
		if (!isValidEmail(email)) {
			setFormState(ERROR);
			setErrorMessage("Please enter a valid email");
			return;
		}
		if (hasRecentSubmission()) return;
		setFormState(SUBMITTING);

		// build additional fields
		const additionalFields = Object.entries(fields).reduce(
			(acc, [key, val]) => {
				if (val) {
					return acc + "&" + key + "=" + encodeURIComponent(val);
				}
				return acc;
			},
			"",
		);

		// build body
		const formBody = `userGroup=${encodeURIComponent(
			formStyles.userGroup,
		)}&email=${encodeURIComponent(email)}&mailingLists=`;

		// API request to add user to newsletter
		fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
			method: "POST",
			body: formBody + additionalFields,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		})
			.then((res: any) => [res.ok, res.json(), res])
			.then(([ok, dataPromise, res]) => {
				if (ok) {
					resetForm();
					setFormState(SUCCESS);
				} else {
					dataPromise.then((data: any) => {
						setFormState(ERROR);
						setErrorMessage(data.message || res.statusText);
						localStorage.setItem("loops-form-timestamp", "");
					});
				}
			})
			.catch((error) => {
				setFormState(ERROR);
				// check for cloudflare error
				if (error.message === "Failed to fetch") {
					setErrorMessage(
						"Too many signups, please try again in a little while",
					);
				} else if (error.message) {
					setErrorMessage(error.message);
				}
				localStorage.setItem("loops-form-timestamp", "");
			});
	};

	const isInline = formStyles.formStyle === "inline";

	switch (formState) {
		case SUCCESS:
			return (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<p
						style={{
							fontFamily: `'${formStyles.successFont}', sans-serif`,
							color: formStyles.successFontColor,
							fontSize: `${formStyles.successFontSizePx}px`,
						}}
					>
						{formStyles.successMessage}
					</p>
				</div>
			);
		case ERROR:
			return (
				<>
					<SignUpFormError />
					<BackButton />
				</>
			);
		default:
			return (
				<>
					<form
						onSubmit={handleSubmit}
						style={{
							display: "flex",
							flexDirection: isInline ? "row" : "column",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
						}}
					>
						<input
							type="text"
							name="email"
							placeholder={formStyles.placeholderText}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required={true}
							className="bg-zinc-900"
							style={{
								color: formStyles.formFontColor,
								fontFamily: `'${formStyles.formFont}', sans-serif`,
								fontSize: `${formStyles.formFontSizePx}px`,
								margin: isInline ? "0px 10px 0px 0px" : "0px 0px 10px",
								width: "100%",
								maxWidth: "300px",
								minWidth: "100px",
								boxSizing: "border-box",
								boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
								borderRadius: "6px",
								padding: "8px 12px",
							}}
						/>
						<div
							aria-hidden="true"
							style={{ position: "absolute", left: "-2024px" }}
						></div>
						<SignUpFormButton />
					</form>
				</>
			);
	}

	function SignUpFormError() {
		return (
			<div
				style={{
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
				}}
			>
				<p
					style={{
						fontFamily: "Inter, sans-serif",
						color: "rgb(185, 28, 28)",
						fontSize: "14px",
					}}
				>
					{errorMessage || "Oops! Something went wrong, please try again"}
				</p>
			</div>
		);
	}

	function BackButton() {
		return (
			<Button type="submit" onClick={resetForm}>
				&larr; Back
			</Button>
		);
	}

	function SignUpFormButton() {
		return (
			<Button type="submit">
				{formState === SUBMITTING ? (
					<>
						<svg
							className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<title>spinner</title>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					</>
				) : (
					formStyles.buttonText
				)}
			</Button>
		);
	}
}

function isValidEmail(email: any) {
	return /.+@.+/.test(email);
}
