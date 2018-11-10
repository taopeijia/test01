const path = require('path');

const config = {
    /*入口*/
    entry:{
        'firstitem':'./src/firstitem/index.js',
        'seconditem':'./src/seconditem/second.js'
    },
    /*输出*/
    output:{
        filename:'[name].js',
        path: path.resolve(__dirname,'dist')
    },
    /*环境配置*/
    mode: 'production'

}
module.exports = config;