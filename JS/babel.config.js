module.exports = {
  presets: [
    '@babel/preset-flow',
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: 'last 3 Chrome version, Firefox ESR, last 1 safari version, last 3 ios version'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'babel-plugin-macros',
    [
      'inline-replace-variables',
      {
        ISDEV: process.env.NODE_ENV !== 'production'
      }
    ]
  ]
}