export const SITE_PUBLISHED_DATE = "2024-01-01";

const ORG = {
  "@type": "Organization",
  name: "Component Party",
  url: "https://component-party.dev",
  logo: { "@type": "ImageObject", url: "https://component-party.dev/popper.svg" },
} as const;

export function webApplicationJsonLd(buildDate: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Component Party",
    description:
      "Compare JavaScript frameworks side-by-side: React, Vue, Angular, Svelte, Solid.js, and more. See syntax differences, features, and code examples for web development frameworks.",
    url: "https://component-party.dev/",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: ORG,
    publisher: ORG,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    datePublished: SITE_PUBLISHED_DATE,
    dateModified: buildDate,
  };
}

export function techArticleJsonLd(opts: {
  titleA: string;
  titleB: string;
  description: string;
  url: string;
  image: string;
  buildDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${opts.titleA} vs ${opts.titleB} - side-by-side code comparison`,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    inLanguage: "en-US",
    datePublished: SITE_PUBLISHED_DATE,
    dateModified: opts.buildDate,
    author: ORG,
    publisher: ORG,
    about: [
      {
        "@type": "SoftwareApplication",
        name: opts.titleA,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
      {
        "@type": "SoftwareApplication",
        name: opts.titleB,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
    ],
  };
}
