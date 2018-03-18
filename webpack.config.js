const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    /* Sets the entry point directory (All of our source files go into it) */
    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        /* Sets the output point directory (All of our build files go into it) */
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".js", ".json"],
        /* Helps avoid absolute paths */
        alias: {
            _components: path.resolve(__dirname, 'src/js/react/components'),
            _utilities: path.resolve(__dirname, 'src/js/utilities'),
            _styles: path.resolve(__dirname, 'src/styles'),
            _assets: path.resolve(__dirname, 'src/assets')
        },
        modules: [path.resolve(__dirname, "src/js"), "node_modules"]
    },
    module: {
        /* Looks for all sass files being imported by React components */
        rules: [
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // If you are having trouble with urls not resolving add this setting.
                                // See https://github.com/webpack-contrib/css-loader#url
                                url: false,
                                sourceMap: true
                            }
                        }, 
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                  })
            },
            {
                test: /\.js$|\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ["es2015", "react"]
                    }
               }
            },
            {
                test: /\.(png|svg|jpg|gif)$|\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        /* Combines all the sass files being imported into one. */
        new ExtractTextPlugin('styles/main.css'),
        /* Creates our index HTML page in our build */
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    /* Runs development server */
    devServer: {
        open: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};