module.exports = {
  "presets": [
    [
      "@lightscript",
      {
        "stdlib": {
          "lodash": false
        },
        "noEnforcedSubscriptIndentation": true,
        "existential": true
      }
    ]
  ],
  "plugins": [
    [
      "inline-replace-variables",
      {
        "ISDEV": process.env.NODE_ENV !== 'production'
      }
    ]
  ]
}