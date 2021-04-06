module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9000',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
