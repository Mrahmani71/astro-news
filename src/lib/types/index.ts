export type Icon = {
	size?: string;
	width?: string;
	height?: string;
	color?: string;
	strokeWidth?: string;
};

export type Link = {
	href: string;
	text: string;
	icon?: string;
};

export type Author = {
	name: string;
	link: string;
};

export type Meta = {
	title: string;
	metaTitle: string;
	description: string;
	type: 'article' | 'website';
	ogImage: string;
	ogImageAlt: string;
};

export type ArticleMeta = Meta & {
	publishedTime: string;
	lastModified: string;
	authors: Author[];
};

type Cover = {
	src: string;
	width: number;
	height: number;
	format: string;
};

type ArticleAuthor = {
	id: string;
	collection: string;
};

export type Article = {
	id: string;
	data: {
		isDraft: boolean;
		isBigHeadline: boolean;
		isSmallHeadline: boolean;
		cover: Cover;
		title: string;
		description: string;
		category: {
			id: string;
			collection: string;
		};
		authors: ArticleAuthor[];
		publishedTime: string;
	};
	body: string;
	filePath: string;
	assetImports: string[];
	digest: string;
	deferredRender: boolean;
	collection: string;
};
