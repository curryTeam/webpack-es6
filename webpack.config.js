module.exports = {
    entry: __dirname + '/app/main.js', //已多次提及的唯一的入口文件
    devtool: 'evel-source-map', //配置生成Source Maps，选择合适的选项
    output: {
        path: __dirname + '/public', //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: __dirname + "/public", //本地服务器所加载的页面所在的目录
        color: true, //终端输出为彩色
        // inline:true//实时刷新
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            }
        }]
    }
}