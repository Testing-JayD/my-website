const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://troncpaye.co.uk";

export const siteConfig = {
	title: "TroncPAYE | TroncMaster & Payroll Bureau Combined",
	author: "TroncPAYE",
	url: SITE_URL,
	utm: {
		source: SITE_URL,
		medium: "referral",
		campaign: "navigation",
	},
	meta: {
		title: "TroncPAYE | Tronc and payroll, perfectly in sync.",
		description:
			"Merge your TroncMaster and Payroll Provider into one seamless bureau. Cut the traditional percentage-based fees, eliminate double admin, and remain 100% Tips Act compliant.",
		keywords:
			"troncmaster, hospitality payroll, tronc scheme, payroll bureau, tips act compliance, tronc paye, restaurant payroll",
		image: `${SITE_URL}/assets/preview.jpg`,
		twitterHandle: "@TroncPAYE",
	},
	social: {
		linkedin: "https://www.linkedin.com/company/troncpaye",
		x: "https://x.com/TroncPAYE",
		facebook: "https://www.facebook.com/TroncPAYE",
		instagram: "https://www.instagram.com/TroncPAYE",
	},
	contact: {
		email: "info@troncpaye.co.uk",
		phone: "", // Add your phone number here
	},
};