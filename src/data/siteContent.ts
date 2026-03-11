import { getLocale } from "astro-i18n-aut";

export type SiteLocale = "ja" | "en";

const content = {
	ja: {
		heroTitle: "ヴィタリー・ユシュマノフ",
		heroSubtitle: "バリトン | Vitaly Yushmanov Official Website",
		heroText:
			"ドイツと日本を拠点に活動するオペラ歌手ヴィタリー・ユシュマノフの公式サイトです。公演情報、ニュース、レパートリー、メディア情報をご覧いただけます。",
		schedule: [
			{ date: "2026-04-12", city: "東京", venue: "サントリーホール", work: "ドイツ歌曲リサイタル" },
			{ date: "2026-05-03", city: "大阪", venue: "フェスティバルホール", work: "マーラー《さすらう若人の歌》" },
			{ date: "2026-06-20", city: "ベルリン", venue: "Konzerthaus", work: "シューベルト歌曲集" }
		],
		news: [
			{ title: "2026年日本ツアー決定", body: "春の日本ツアー日程を公開しました。東京・大阪・名古屋での公演を予定しています。" },
			{ title: "新作CDリリース", body: "ロシア歌曲とドイツ歌曲を収録した最新アルバムが発売されました。" },
			{ title: "マスタークラス開催", body: "若手歌手向けマスタークラスを東京で開催します。" }
		],
		repertoire: ["モーツァルト", "チャイコフスキー", "ヴェルディ", "マーラー", "シューベルト", "ラフマニノフ"],
		biography:
			"ヴィタリー・ユシュマノフは国際的に活動するバリトン歌手。オペラ、歌曲、宗教曲の分野で幅広く演奏を行い、欧州と日本でリサイタル・オーケストラ公演に出演しています。",
		media: [
			"YouTube公式チャンネルで演奏映像を公開中",
			"インタビュー記事・レビュー掲載",
			"公演写真・プロモーション素材"
		],
		cds: ["Russian Romances", "Schubert Lieder Selection", "Live in Tokyo"],
		contactTitle: "お問い合わせ",
	},
	en: {
		heroTitle: "Vitaly Yushmanov",
		heroSubtitle: "Baritone | Official Website",
		heroText:
			"Official website of opera singer Vitaly Yushmanov. Explore schedule, news, repertoire, media appearances, and contact information.",
		schedule: [
			{ date: "2026-04-12", city: "Tokyo", venue: "Suntory Hall", work: "German Lied Recital" },
			{ date: "2026-05-03", city: "Osaka", venue: "Festival Hall", work: "Mahler: Songs of a Wayfarer" },
			{ date: "2026-06-20", city: "Berlin", venue: "Konzerthaus", work: "Schubert Lieder Program" }
		],
		news: [
			{ title: "Japan Tour 2026 announced", body: "Spring tour dates are now available for Tokyo, Osaka, and Nagoya." },
			{ title: "New CD release", body: "A new album featuring Russian romances and German lieder is now available." },
			{ title: "Masterclass in Tokyo", body: "A vocal masterclass for young singers will be held this season." }
		],
		repertoire: ["Mozart", "Tchaikovsky", "Verdi", "Mahler", "Schubert", "Rachmaninoff"],
		biography:
			"Vitaly Yushmanov is an internationally active baritone, performing opera, song recitals, and sacred repertoire across Europe and Japan.",
		media: [
			"Performance videos on official YouTube channel",
			"Interviews and press reviews",
			"Concert photography and promotional materials"
		],
		cds: ["Russian Romances", "Schubert Lieder Selection", "Live in Tokyo"],
		contactTitle: "Contact",
	},
};

export function getSiteContent(url: URL) {
	const locale = (getLocale(url) ?? "ja") as SiteLocale;
	return content[locale] ?? content.ja;
}
