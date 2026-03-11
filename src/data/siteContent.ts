import { getLocale } from "astro-i18n-aut";
import ja from "@src/content/site/ja/site.json";
import en from "@src/content/site/en/site.json";

export type SiteLocale = "ja" | "en";

const content = { ja, en };

export function getSiteContent(url: URL) {
	const locale = (getLocale(url) ?? "ja") as SiteLocale;
	return content[locale] ?? content.ja;
}
