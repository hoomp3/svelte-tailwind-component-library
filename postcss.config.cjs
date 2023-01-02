module.exports = {
    plugins: {
      cssnano: {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    }
  };
  