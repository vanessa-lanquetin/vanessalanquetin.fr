const prodConfig = require('./webpack.config.prod')
prodConfig.mode = 'development'
module.exports = prodConfig