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
