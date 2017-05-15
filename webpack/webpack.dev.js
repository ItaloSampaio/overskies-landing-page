const { resolve }       = require('path')
const HtmlPlugin        = require('html-webpack-plugin')
const DashboardPlugin   = require('webpack-dashboard/plugin')

const srcDir = resolve(__dirname, '../src')

module.exports = {
    entry: `${srcDir}/index.js`,
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' }, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:6]',
                            camelCase: true
                        }
                    }
                ]
            },           
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 35000
                }
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: `${srcDir}/index.html`
        }),
        new DashboardPlugin()
    ]
}