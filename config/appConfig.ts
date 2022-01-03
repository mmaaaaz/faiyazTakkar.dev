const name = 'OwnStore'

const appConfig = {
  isDev: process.env.ENV?.includes('local'),
  env: process.env.ENV,
  global: {
    app: {
      name: name,
    },
    domain: process.env.ENV_DOMAIN,
    baseUrl: process.env.ENV_BASE_URL,
    emailAddress: 'www.shtakkar@gmail.com',
    socialProfiles: {
      twitter: 'https://twitter.com/shtakkar',
      instagram: 'https://www.instagram.com/_faiyaz_shaikh',
      gitHub: 'https://github.com/yTakkar',
      linkedIn: 'https://www.linkedin.com/in/faiyaz-s-413450118/',
    },
  },
  seo: {
    facebook: {},
    twitter: {
      username: process.env.ENV_SEO_TWITTER_USERNAME,
    },
  },
  integrations: {},
}

export default appConfig
