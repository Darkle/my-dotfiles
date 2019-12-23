module.exports = {
  presets: [
    [
      '@lightscript',
      {
        stdlib: {
          lodash: false
        },
        env: {
          targets: {
            'chrome': 78,
            'firefox': 70,
          },
          useBuiltIns: false,
          modules: false
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