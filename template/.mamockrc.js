const path = require('path');

// 默认配置
module.exports = {
  prefix: '/__DEV__',
  rootPath: path.resolve(__dirname, './data/mock'),
  proxyPath: path.resolve(__dirname, './data/proxy'),
  proxyFilename: 'config.json',
};
