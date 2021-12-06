module.exports = {
  extends: ["stylelint-config-sass-guidelines"],
  rules: {
    "selector-class-pattern":
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^[a-z][a-zA-Z0-9]+$", // allow only kebab-case or lowerCamelCase
    "string-quotes": "double",
    "order/properties-alphabetical-order": null,
    "property-no-vendor-prefix": null,
    "selector-max-id": 1,
    "selector-max-compound-selectors": 4,
    "max-nesting-depth": [3, { ignore: ["pseudo-classes"] }],
    "declaration-property-value-disallowed-list": {}, // to override rule from plugin
    "selector-no-qualifying-type": [
      true,
      {
        ignore: ["attribute", "class"],
      },
    ],
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          type: "at-rule",
          name: "extend",
        },
        {
          type: "at-rule",
          name: "include",
          hasBlock: false,
        },
        {
          type: "at-rule",
          name: "include",
          hasBlock: true,
        },
        "declarations",
        "rules",
      ],
    ],
  },
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
}
