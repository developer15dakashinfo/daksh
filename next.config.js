module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(jpg|png|webp)$/,
        type: "asset/resource",
      });
      return config;
    },
  };
  