export const SITE_URL: string = "https://vitalyn737.github.io/astro-starter";
export const SITE_TITLE: string = "Vitaly Yushmanov";
export const SITE_DESCRIPTION: string = "Official personal website of opera singer Vitaly Yushmanov.";

export const TWITTER_CREATOR: string = "@vitalyyushmanov";

export type Page = {
	key: string;
	href: string;
};

export const PAGES: Page[] = [
	{ key: "home", href: "/" },
	{ key: "schedule", href: "/schedule" },
	{ key: "news", href: "/news" },
	{ key: "repertoire", href: "/repertoire" },
	{ key: "biography", href: "/biography" },
	{ key: "media", href: "/media" },
	{ key: "cds", href: "/cds" },
	{ key: "contact", href: "/contact" },
];

export const DEFAULT_LOCALE = "ja";
export const LOCALES = {
	ja: "ja",
	en: "en",
};
