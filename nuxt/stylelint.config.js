module.exports = {
  extends: [
    'stylelint-config-prettier'
  ],
  "plugins": [
    "stylelint-scss"
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'color-hex-length': 'short', // 指定十六进制颜色是否使用缩写
    // 禁止使用颜色名称
    'color-named': ['never',
      {
        'ignore': ['inside-function']
      }
    ],
    /**
         * Function
         */
    'function-comma-space-after': 'always', // 函数内的内容，逗号之后要求有一个空格或禁止有空白
    /**
         * Number
         */
    'number-leading-zero': 'never', // 禁止书写小数的前导 0
    'number-no-trailing-zeros': true, // 禁止数字中的拖尾 0
    /**
         * String
         */
    'string-quotes': 'double', // 字符串用双引号
    /**
         * Length
         */
    'length-zero-no-unit': true, // 长度值为0时，禁止带单位
    /**
         * Block
         */
    'block-opening-brace-space-before': 'always', // 尖括号前必须有空格
    /**
         * Selector
         */
    'selector-max-id': 0, // 选择器不能为 id
    'selector-combinator-space-after': 'always', // 在关系选择符之后要求有一个空格或禁止有空白
    'selector-max-compound-selectors': 4, // 限制复合选择器的数量
    // 选择器命名规范
    'selector-class-pattern': ['^((?!js)[a-zA-Z][a-zA-Z0-9]*)([_-]+[a-zA-Z0-9]+)*$',
      {
        'resolveNestedSelectors': true
      }
    ],
    'selector-list-comma-newline-after': 'always',
    /**
         * Declaration
         */
    'declaration-colon-space-after': 'always', // 在冒号之后要求有一个空格或禁止有空白
    'declaration-block-semicolon-newline-after': 'always', // 在声明块的分号之后要求有一个换行符或禁止有空白
    // 不能用的规则，目前有 border: none; 建议为 border: 0；或 border: 0 none;
    'declaration-property-value-blacklist': {
      'border': ['none'
      ]
    },
    /**
         * Property
         */
    'property-no-vendor-prefix': true, // 禁止使用带浏览器前缀的属性
    /**
         * Value
         */
    'value-no-vendor-prefix': true, // 禁止使用带浏览器前缀的属性值
    'value-list-comma-space-after': 'always', // 在属性值的内容中，逗号之后要求有一个空格或禁止有空白
    /**
         * At-rule
         */
    'at-rule-no-vendor-prefix': true, // 禁止 at(@) 规则使用浏览器前缀
    'keyframe-declaration-no-important': true, // 禁止在 keyframe 声明中使用 !important
    /**
         * Rule
         */
    // 除特殊情况，规则前必须有空行
    'rule-empty-line-before': ['always',
      {
        'ignore': ['after-comment', 'inside-block'
        ]
      }
    ],
    /**
         * Comment
         */
    'comment-no-empty': true, // 禁止空注释，CSS 规则内注释不受限制
    'comment-whitespace-inside': 'always', // 注释前后需要有空格
    /**
         * General / Sheet
         */
    'max-nesting-depth': 4, // 限制允许嵌套的深度
    'indentation': 2 // 缩进，2 spaces
  }
}
