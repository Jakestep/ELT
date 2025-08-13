/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://everlesstech.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  policies: [{ userAgent: "*", allow: "/" }],
  exclude: ["/admin", "/private/*", "/drafts/*", "/api/*", "/server-only"],
};
