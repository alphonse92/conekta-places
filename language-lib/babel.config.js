let ignore = [];

if (process.env.NODE_ENV !== 'test') {
  ignore = [];
}

if (process.env.NODE_ENV === 'prod') {
  ignore = [
    /node_modules/,
    'src/**/*.spec.js',
    'src/**/*.test.js',
  ];
}

module.exports = {
  ignore,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ],
};
