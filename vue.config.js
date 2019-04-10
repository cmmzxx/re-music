const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('components', resolve('./src/components'))
      .set('router', resolve('./src/router'))
      .set('base', resolve('./src/base'))
      .set('common', resolve('./src/common'))
      .set('api', resolve('./src/api'))
      .set('config', resolve('./src/config'))
  }
}
