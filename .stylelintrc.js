module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-idiomatic-order",
  ],
  plugins: [
    "stylelint-color-format",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    "declaration-empty-line-before": [
      "always",
      {
        ignore: [
          "after-comment",
          "after-declaration",
          "first-nested",
          "inside-single-line-block",
        ],
      },
    ],
    "color-format/format": {
      format: "rgba",
    },
    "plugin/declaration-block-no-ignored-properties": true,
  },
};
