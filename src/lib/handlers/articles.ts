import { getCollection } from "astro:content";

const articlesCollection = (await getCollection('articles', ({ data }) => {
    return (
        data.isDraft !== true &&
        new Date(data.publishedTime) < new Date()
    );
})).sort((a, b) =>
    b.data.publishedTime.localeCompare(a.data.publishedTime)
);

export const articlesHandler = {

    allArticles: () => articlesCollection,

    headlineBig: () => articlesCollection.filter((article) => article.data.isBigHeadline === true)[0],

    headlineSmall: () => {
        const bigHeadline = articlesHandler.headlineBig();

        if (!bigHeadline || !bigHeadline.id) {
			console.error('bigHeadline is undefined or missing id!');
			return [];
		}
    
        return articlesCollection.filter((article) => article.data.isSmallHeadline === true && bigHeadline.id !== article.id).slice(0, 4);
    },
}
