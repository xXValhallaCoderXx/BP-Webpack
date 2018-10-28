{
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ];
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ];
  env: {
    development: {
      plugins: ['react-hot-loader/babel'];
    }
    production: {
    }
  }
}
