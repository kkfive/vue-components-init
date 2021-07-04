module.exports = {
  extends: ['airbnb', 'prettier'],
  singleQuote: true, // 使用单引号
  printWidth: 100, // 超过最大值换行
  htmlWhitespaceSensitivity: 'ignore',
  semi: false, // 结尾使用分号
  disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  trailingComma: 'none', // 函数最后不需要逗号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  useTabs: false, // 使用tab
  tabWidth: 2 // tab宽度
}
