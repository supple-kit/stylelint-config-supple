"use strict";

module.exports = {
	extends: "stylelint-config-standard-scss",
	rules: {
		"scss/at-extend-no-missing-placeholder": true,
		"scss/at-rule-no-unknown": true,
		"scss/dollar-variable-colon-space-before": "never",
		"scss/selector-no-redundant-nesting-selector": true,
		"at-rule-empty-line-before": null,
		"at-rule-no-unknown": null,
		"at-rule-no-vendor-prefix": true,
		"block-closing-brace-newline-after": [
			"always",
			{
				ignoreAtRules: ["if", "else"],
			},
		],
		"block-closing-brace-space-after": "always-single-line",
		"color-hex-length": "long",
		"color-named": "never",
		"declaration-block-semicolon-newline-before": "never-multi-line",
		"declaration-empty-line-before": "never",
		"font-family-name-quotes": "always-where-required",
		"function-comma-newline-before": "never-multi-line",
		"function-url-quotes": "always",
		"max-empty-lines": 5,
		"max-nesting-depth": 4,
		"media-query-list-comma-newline-before": "never-multi-line",
		"no-unknown-animations": true,
		"selector-attribute-quotes": "always",
		"selector-class-pattern":
			"^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$",
		"selector-list-comma-newline-before": "never-multi-line",
		"selector-list-comma-space-after": "always-single-line",
		"selector-max-compound-selectors": 5,
		"shorthand-property-no-redundant-values": true,
		"string-quotes": "single",
		"value-list-comma-newline-before": "never-multi-line",
		"value-no-vendor-prefix": true,
	},
};
