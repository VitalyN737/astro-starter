import { DEFAULT_LOCALE, LOCALES } from "@src/consts";
import { getLocale } from "astro-i18n-aut";

import en from "@locales/en.json";
import ja from "@locales/ja.json";

const handler = {
	get(target: any, prop: any) {
		const value = target[prop];
		return typeof value === "string" ? value.replaceAll("\n", "<br/>") : prop;
	},
};

const jaProxy = new Proxy(ja, handler);
const enProxy = new Proxy(en, handler);

export const defaultLocale = DEFAULT_LOCALE;
export const locales = LOCALES;

export default function t(astroUrl: URL): Locales {
	const locale = getLocale(astroUrl);
	return locale === "en" ? (enProxy as Locales) : (jaProxy as Locales);
}

export function tFn(astroUrl: URL) {
	const translations = getLocale(astroUrl) === "en" ? enProxy : jaProxy;
	return (key: string): string => (key in translations ? translations[key] : key);
}

export function localizePath(link: string | URL, astroUrl: string | URL): string {
	const locale = getLocale(astroUrl);
	let localizedLink = locale && locale !== defaultLocale ? `/${locale}/${link}`.replaceAll("//", "/") : String(link);
	if (!localizedLink.endsWith("/")) localizedLink += "/";
	return localizedLink;
}
