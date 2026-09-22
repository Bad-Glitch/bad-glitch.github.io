import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Amr Abdel Hamide",
	subtitle: "Bad Glitch",
	lang: "en",
	themeColor: {
		hue: 250,
		fixed: false,
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/Bad-Glitch",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/bad-glitch-cover.png",
	name: "Amr Abdel Hamide",
	bio: "Red Teamer | OSCP, CRTP, eWAPTXv3 | breaking systems, simulating real threats.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter",
			url: "https://x.com/BadGlitch0",
		},
		{
			name: "Linkedin",
			icon: "fa6-brands:linkedin-in",
			url: "https://www.linkedin.com/in/badglitch",
		},
		{
			name: "Youtube",
			icon: "fa6-brands:youtube",
			url: "https://youtube.com/@hackthelogic0",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Bad-Glitch",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};