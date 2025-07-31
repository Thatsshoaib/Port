const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Port' : '',
  assetPrefix: isProd ? '/Port/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
