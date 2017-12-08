# vayne-plugin-qiniu

> vayne 七牛云上传插件

## vayne 使用文档 https://vaynejs.github.io

## Installation
```
yarn add vayne-plugin-qiniu -D
npm i vayne-plugin-qiniu -D
```

## Usage

在__.vaynerc.js__ 引入

```js
module.exports = {
  plugins: [
    'vayne-plugin-qiniu' // 获取简写 stylelint
  ]
}
```

## Config 
> 在.vaynerc.js 

```js
module.exports = {
  qiniu: {
    accessKey: 'AccessKey', // 七牛 AccessKey
    secretKey: 'secretKey', // 七牛 secretKey
    bucket: 'my-bucket', // 七牛存储对象名称
    path: '[hash]', // 存储路径， 默认为 [hash:8]
    exclude: /index\.html$/, // 可选，排除特定文件，正则表达式，默认 /index\.html$/
    include: /app\.js$/, // 可选，指定要上传的文件，正则表达式，如: /app\.js$/
    batch: 20, // 批量上传文件并发数，默认 20
    zone: 'Zone_z0' // 可选，存储在七牛的机房（华东 Zone_z0、华北 Zone_z1、华南 Zone_z2、北美 Zone_na0）
  }
}
```