module.exports = {
	'defaultSeverity': 'error',
	'rules': {
		'arrow-return-shorthand': true,
		'class-name': true,
		'curly': true,
		'cyclomatic-complexity': [
			true,
			10,
		],
		'eofline': true,
		'indent': [
			true,
			'tabs'
		],
		'linebreak-style': [
			true,
			'LF'
		],
		'max-file-line-count': [
			true,
			200
		],
		'max-line-length': [
			true,
			100
		],
		'new-parens': true,

		'no-any': true,
		'no-conditional-assignment': true,
		'no-consecutive-blank-lines': true,
		'no-duplicate-variable': true,
		'no-eval': true,
		'no-irregular-whitespace': true,
		'no-parameter-reassignment': true,
		'no-require-imports': true,
		'no-reference': true,
		'no-shadowed-variable': true,
		'no-string-throw': true,
		'no-switch-case-fall-through': true,
		'no-trailing-whitespace': true,
		'no-unnecessary-initializer': true,
		'no-var-keyword': true,

		'object-literal-shorthand': true,
		'object-literal-key-quotes': [
			true,
			'as-needed'
    ],

		'ordered-imports': [
			true, {
				'import-sources-order': 'any',
				'named-imports-order': 'lowercase-first'
			}
		],

		'quotemark': [
			true,
			'single',
			'jsx-double'
		],

		'prefer-const': true,
		'prefer-for-of': true,
		'prefer-method-signature': true,

		'semicolon': [
			true,
			'never'
		],

		"space-before-function-paren": [true, {"anonymous": "never", "named": "never", "asyncArrow": "always"}],

		'trailing-comma': [ true, {
			'multiline': {
				'objects': 'always',
				'arrays': 'always',
				'functions': 'never',
				'typeLiterals': 'ignore'
			},
			'singleline': 'never'
		}],

		'triple-equals': true,
		'variable-name': [
			true,
			'ban-keywords',
			'check-format',
			'allow-pascal-case'
		],
		'whitespace': [
			true,
			'check-branch',
			'check-decl'
		]
	}
};
