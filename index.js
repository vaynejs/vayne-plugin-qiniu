const _ = require('lodash')
const QiniuPlugin = require('./qiniu')

// 默认配置
const defaultOptions = {
  batch: 20,
  path: '[hash:8]',
  exclude: /index\.html$/ // 排除特定的文件
}

/**
 *
 * vayne qiniu 七牛云上传插件
 * @param {any} config vayne 配置
 * @param {any} log  vayne log
 * @param {any} utils vayne 工具库
 * @returns webpack qiniu plugins
 */
class VaynePluginQiniu {
  constructor(config, log, utils) {
    log.debug('开始解析 vayne qiniu 插件')
    let qiniu = config.qiniu || {}
    let opts = _.defaultsDeep(defaultOptions, qiniu)
    log.debug(opts)
    this.name = 'VaynePluginQiniu'

    const qiniuPlugin = new QiniuPlugin(opts)

    let result = {
    }
    // 生产环境 才会具有此插件
    if (utils.isProduction()) {
      result.afterPlugins = [
        qiniuPlugin
      ]
    }

    return result
  }
}

module.exports = VaynePluginQiniu
