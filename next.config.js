module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://clean-blue-tutu.cyclic.app/:path*',
        },
      ]
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
