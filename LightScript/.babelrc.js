module.exports = {
  ignore: [
    "node_modules",
  ],  
  presets: [
    [
      '@lightscript',
      {
        env: {
          targets: { node: 10 }
        },
        stdlib: false,
      }
    ]
  ]
}
