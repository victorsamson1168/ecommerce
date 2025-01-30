/** @type {import('next').NextConfig} */

// const environmentUrls = {
//   production: 'https://www.redrob.io/',
//   staging: 'https://staging.redrob.io/',
//   development: 'https://dev.redrob.io/',
// };

// Determine environment
const ENV = process.env.ENVIRONMENT || `development`; // default to 'dev'

// const config = {
//   local: {
//     chatDomain: `dev.redrob.io`,
//     seekerDomain: `devseeker.redrob.io`,
//   },
//   development: {
//     chatDomain: `dev.redrob.io`,
//     seekerDomain: `devseeker.redrob.io`,
//   },
//   staging: {
//     chatDomain: `staging.redrob.io`,
//     seekerDomain: `stagingseeker.redrob.io`,
//   },
//   production: {
//     chatDomain: `www.redrob.io`,
//     seekerDomain: `seeker.redrob.io`,
//   },
// }[ENV];

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  reactStrictMode: true,

  // assetPrefix: environmentUrls[process.env.ENVIRONMENT] || '',

  images: {
    unoptimized: true,
    domains: [
      'redrob-development.s3.ap-northeast-2.amazonaws.com',
      'redrob.s3.ap-northeast-2.amazonaws.com',
      'cdn.redrob.io',
    ],
  },
};

module.exports = nextConfig;
