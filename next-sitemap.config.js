/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://onelinkly.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
