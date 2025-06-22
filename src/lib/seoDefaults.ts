export interface SEODefaults {
    title: string;
    description: string;
    siteName: string;
    siteUrl: string;
    defaultImage: string;
    twitterHandle: string;
}

export const seoDefaults: SEODefaults = {
    title: "Journalite - Your Trusted Journalism Source",
    description: "A revolutionary social platform delivering reliable journalism, thoughtful analysis, and community-driven discussions. Join the future of news.",
    siteName: "Journalite",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://journalite.abdisalam.blog",
    defaultImage: "/images/journalite-social-banner.svg", // Using SVG for now
    twitterHandle: "@journalite"
};

export const getDefaultMetadata = () => ({
    title: seoDefaults.title,
    description: seoDefaults.description,
    siteName: seoDefaults.siteName,
    siteUrl: seoDefaults.siteUrl,
    image: seoDefaults.defaultImage,
    type: "website" as const
}); 