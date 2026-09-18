import { getCollection } from "astro:content";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";

export type Tag = {
name: string;
count: number;
};

export type Category = {
name: string;
count: number;
};

export async function getSortedPosts() {
const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
return import.meta.env.PROD ? data.draft !== true : true;
});

const sorted = allBlogPosts.sort((a, b) => {
	const dateA = new Date(a.data.published);
	const dateB = new Date(b.data.published);

	return dateB.getTime() - dateA.getTime();
});

for (let i = 1; i < sorted.length; i++) {
	sorted[i].data.nextSlug = sorted[i - 1].slug;
	sorted[i].data.nextTitle = sorted[i - 1].data.title;
}

for (let i = 0; i < sorted.length - 1; i++) {
	sorted[i].data.prevSlug = sorted[i + 1].slug;
	sorted[i].data.prevTitle = sorted[i + 1].data.title;
}

return sorted;

}

export async function getTagList(): Promise<Tag[]> {
const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
return import.meta.env.PROD ? data.draft !== true : true;
});

const countMap: Record<string, number> = {};

for (const post of allBlogPosts) {
	if (!post.data.tags) continue;

	for (const tag of post.data.tags) {
		if (!countMap[tag]) {
			countMap[tag] = 0;
		}

		countMap[tag]++;
	}
}

const keys = Object.keys(countMap).sort((a, b) =>
	a.toLowerCase().localeCompare(b.toLowerCase())
);

return keys.map((key) => ({
	name: key,
	count: countMap[key],
}));


}

export async function getCategoryList(): Promise<Category[]> {
const rootCategories = [
"Active Directory",
"Certification - Notes",
"Certifications",
"Courses Notes",
"Daily - Posts",
"Labs",
"Methodologies",
"OSINT Toolkit",
"Privilege Escalation",
"Web Client-Side",
"Web Server-Side",
];

const allBlogPosts = await getCollection<"posts">("posts", ({ data }) => {
	return import.meta.env.PROD ? data.draft !== true : true;
});

const countMap: Record<string, number> = {};

for (const category of rootCategories) {
	countMap[category] = 0;
}

for (const post of allBlogPosts) {
	const category = post.data.category;

	if (!category) continue;

	const categoryName = String(category);

	if (countMap[categoryName] !== undefined) {
		countMap[categoryName]++;
	}
}

return rootCategories.map((category) => ({
	name: category,
	count: countMap[category],
}));

}
