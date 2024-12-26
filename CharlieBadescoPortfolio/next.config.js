module.exports = {
  webpack: (config) => {
    config.cache = false;
    return config;
  },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
