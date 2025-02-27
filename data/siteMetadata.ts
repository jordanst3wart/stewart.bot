/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Stewart.bot',
  author: 'Jordan Stewart',
  headerTitle: 'Stewart.bot',
  description:
    "Hi, I'm Jordan, a fullstack software engineer (not just TypeScript). I write about ideas and problems I face so hopefully you don't have them. Any content written is not from an large language model, and the ideas are my own.",
  language: 'en-us',
  siteUrl: 'https://stewart.bot',
  theme: 'system', // system, dark or light
  siteLogo: '/static/favicons/favicon-32-32.png',
  metadataBase: new URL('https://stewart.bot'),
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
