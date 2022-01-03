/** @type {import('next').NextConfig} */

const path = require('path')

const appEnv = process.env.ENV

if (!appEnv) {
  console.error('ENV env variable is not set', process.env.ENV)
  process.exit(1)
}

const getAbsPath = dirPath => {
  const extendedPath = typeof dirPath === 'string' ? [dirPath] : dirPath
  return path.resolve(process.cwd(), ...extendedPath)
}

const { parsed: parsedEnvs } = require('dotenv').config({
  path: getAbsPath(`env/${appEnv}.env`),
})

const nextConfig = {
  env: {
    ...parsedEnvs,
    ENV: process.env.ENV,
  },
  trailingSlash: false,
  basePath: '',
  poweredByHeader: false,
  optimizeFonts: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return []
  },
}

module.exports = nextConfig
