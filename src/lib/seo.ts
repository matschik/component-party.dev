export const WEBAPP_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Component Party",
  description:
    "Compare JavaScript frameworks side-by-side: React, Vue, Angular, Svelte, Solid.js, and more. See syntax differences, features, and code examples for web development frameworks.",
  url: "https://component-party.dev/",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "Component Party",
    url: "https://component-party.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "Component Party",
    url: "https://component-party.dev",
    logo: {
      "@type": "ImageObject",
      url: "https://component-party.dev/popper.svg",
    },
  },
  keywords:
    "JavaScript frameworks, React, Vue, Angular, Svelte, Solid.js, framework comparison, web development, frontend frameworks, component libraries, JavaScript libraries, code comparison, programming tools, developer tools, web components, JSX, TypeScript, modern JavaScript",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  softwareVersion: "2.0.0",
  datePublished: "2024-01-01",
  dateModified: "2024-12-01",
  mainEntity: {
    "@type": "ItemList",
    name: "JavaScript Frameworks Comparison",
    description: "A comprehensive comparison of popular JavaScript frameworks and libraries",
    numberOfItems: "20+",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        name: "React",
        description: "A JavaScript library for building user interfaces",
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
      {
        "@type": "SoftwareApplication",
        name: "Vue.js",
        description: "A progressive JavaScript framework for building user interfaces",
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
      {
        "@type": "SoftwareApplication",
        name: "Angular",
        description: "A platform and framework for building single-page client applications",
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
      {
        "@type": "SoftwareApplication",
        name: "Svelte",
        description: "A radical new approach to building user interfaces",
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
      },
    ],
  },
};
