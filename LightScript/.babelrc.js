module.exports = {
  presets: [
    [
      '@lightscript',
      {
        stdlib: {
          lodash: false
        },
        env: {
          targets: 'last 1 Chrome version, last 1 firefox version'
        }
      }
    ]
  ],
  plugins: [
    [
      'inline-replace-variables',
      {
        ISDEV: process.env.NODE_ENV !== 'production'
      }
    ]
  ]
}