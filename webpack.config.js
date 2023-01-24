const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 9090,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
            }
          },
        ],

      },
      {
        test: /\.(png|jpg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  }
};
