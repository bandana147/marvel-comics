
const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
    return {
            mode,
            entry: "./src/index.js",
            devServer: {
                hot: true,
                open: true
            },
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundle.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    {
                        test: /\.css$/,
                        loader: 'css-loader'
                      },
                      {
                        test: /\.(jpe?g|gif|png|svg)$/i,
                        use: [
                        {
                          loader: 'url-loader?limit=1024000',
                          options: {
                            limit: 10000
                          }
                        }
                      ]
                    }
                     
    
                ]
            },
            resolve: {
                modules: ['node_modules'],
                extensions: ['.min.js', '.js', '.json', '.scss', '.css']
              },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html",
                    favicon: "./public/favicon.ico",
                    filename: "index.html"
                }),
                new webpack.HotModuleReplacementPlugin()
            ]
        }
};