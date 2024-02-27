/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Stewart.bot Blog',
  author: 'Jordan Stewart',
  headerTitle: 'Stewart.bot',
  description:
    "Heya, I'm Jordan, a fullstack software engineer. I write about my problems so hopefully you don't have them",
  language: 'en-us',
  siteUrl: 'https://stewart.bot',
  theme: 'system', // system, dark or light
  siteLogo: '/static/favicons/favicon-32-32.png',
  metadataBase: new URL('https://stewart.bot'),
  socialBanner: '/static/images/twitter-card.png', // I deleted this :/
  github: 'https://github.com/jordanst3wart',
  linkedin: 'https://www.linkedin.com/in/jordanst3wart/',
  locale: 'en-US',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-RFM5J3PFSC',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

export default siteMetadata
