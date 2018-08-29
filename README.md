# vue-data-loader
使用方式：
只需要在vue后缀的文件的loader列表中新增vue-data-loader就可以了，如@vue/cli 中的vue.config.js
```
chainWebpack: (config) => {
  config.resolve.alias
    .set('@', resolve('src'))
    .set('assets', resolve('src/assets'))
    .set('components', resolve('src/components'))
  config.module
    .rule('vuedataloader')
    .test(/\.vue$/)
    .use('vue-data-loader')
      .loader('vue-data-loader')
      .end()
}
```
