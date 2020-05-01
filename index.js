"use strict"

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "scss/at-extend-no-missing-placeholder": true,
    "scss/dollar-variable-colon-space-before": "never",
    "scss/selector-no-redundant-nesting-selector": true,
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-no-vendor-prefix": true,
    "block-closing-brace-newline-after": ["always", {
      ignoreAtRules: ["if", "else"]
    }],
    "block-closing-brace-space-after": "always-single-line",
    "color-hex-length": "long",
    "color-hex-case": "upper",
    "color-named": "never",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "font-family-name-quotes": "always-where-required",
    "function-comma-newline-before": "never-multi-line",
    "function-url-quotes": "always",
    "max-empty-lines": 5,
    "max-nesting-depth": 4,
    "media-query-list-comma-newline-before": "never-multi-line",
    "no-unknown-animations": true,
    "selector-attribute-quotes": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-max-compound-selectors": 5,
    "shorthand-property-no-redundant-values": true,
    "string-quotes": "single",
    "value-list-comma-newline-before": "never-multi-line",
    "value-no-vendor-prefix": true
  }
}
