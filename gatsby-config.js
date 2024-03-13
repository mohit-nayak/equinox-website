/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Equinox Villa`,
    siteUrl: `https://www.yourdomain.tld`,
    siteTitle: 'Equinox Villa',
    siteTitleDefault: 'Equinox Villa',
    hrefLang: 'en',
    siteDescription: 'The Stunning villa in st.lucia? - Equinox. Situated in the exclusive Cap Estate on the northerly tip of St. Lucia, Equinox Villa offers the ideal location for a secluded, sun-soaked retreat. This oceanfront house is set on an acre of grounds and is adjacent to a protected nature reserve. The villa stands proudly against the green hills, overlooking warm Caribbean seas.',
    siteImage: '/image.jpeg',
    twitter: '',
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};
