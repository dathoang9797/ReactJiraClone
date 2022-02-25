const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, './src/Components'),
      '@Config': path.resolve(__dirname, './src/Config'),
      '@HOC': path.resolve(__dirname, './src/HOC'),
      '@Layout': path.resolve(__dirname, './src/Layout'),
      '@Redux': path.resolve(__dirname, './src/Redux'),
      '@Routers': path.resolve(__dirname, './src/Routers'),
      '@Services': path.resolve(__dirname, './src/Services'),
      '@Shared': path.resolve(__dirname, './src/Shared'),
      '@Views': path.resolve(__dirname, './src/Views'),
      '@Assets': path.resolve(__dirname, './src/Assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@hoc': path.resolve(__dirname, './src/hoc'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@routers': path.resolve(__dirname, './src/routers'),
      '@services': path.resolve(__dirname, './src/services'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@views': path.resolve(__dirname, './src/views'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
