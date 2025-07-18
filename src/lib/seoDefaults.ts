export interface SEODefaults {
    title: string;
    description: string;
    siteName: string;
    siteUrl: string;
    defaultImage: string;
    twitterHandle: string;
}

export const seoDefaults: SEODefaults = {
    title: "Oriteria - Your Trusted Journalism Source",
    description: "Discover insightful articles, breaking news, and expert analysis on Oriteria. Your go-to platform for quality journalism and thought-provoking content.",
    siteName: "Oriteria",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://oriteria.abdisalam.blog",
    defaultImage: "/images/oriteria-social-banner.svg",
    twitterHandle: "@oriteria"
};

export const getDefaultMetadata = () => ({
    title: seoDefaults.title,
    description: seoDefaults.description,
    siteName: seoDefaults.siteName,
    siteUrl: seoDefaults.siteUrl,
    image: seoDefaults.defaultImage,
    type: "website" as const
}); 