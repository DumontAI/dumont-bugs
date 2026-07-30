export const siteConfig = {
  name: "Dumont Bugs",
  title: "Dumont Bugs",
  description:
    "Internal bug reporting tool for Dumont and Shipeezi development teams.",
  keywords: [
    "bug reporting",
    "bug tracker",
    "issue reporting",
    "developer tools",
    "dumont",
  ],
  seo: {
    titleTemplate: "%s | Dumont Bugs",
    canonicalPath: "/",
    locale: "en_US",
    openGraphType: "website" as const,
    twitterCard: "summary_large_image" as const,
    defaultOgImage: "/og.png",
  },
  author: {
    name: "Dumont",
    twitter: "@getdumont",
  },
  links: {
    repo: "https://github.com/DumontAI/dumont-bugs",
    github: "https://github.com/DumontAI",
    twitter: "https://x.com/getdumont",
  },
}
