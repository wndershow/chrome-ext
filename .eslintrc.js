module.exports = {
  // parser用于指定解析器，eslint本身无法解析es6语法，需要转换成babel-eslint
  parser: "babel-eslint",
  // extends表示以airbnb为基础规范
  extends: ["airbnb"],
  // env告诉eslint，如果碰到browser和es6的对象，不用报undefined
  env: {
    browser: true,
    es6: true
  },
  // rules用于指定扩展规范规则，会覆盖airbnb规则中的配置
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/no-array-index-key": 0,
    "no-console": 0,
    "jsx-ally/anchor-is-valid": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0
  }
};
