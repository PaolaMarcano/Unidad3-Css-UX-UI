const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpack = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/import.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
        new CssMinimizerWebpack()
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash][ext]'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'html/carrito.html',
        template: './src/views/carrito.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/form-oferta.html',
      template: './src/views/form-oferta.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/landingpage.html',
      template: './src/views/landingpage.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/productos-decoraciones.html',
      template: './src/views/productos-decoraciones.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/productos-regalos.html',
      template: './src/views/productos-regalos.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/productos.html',
      template: './src/views/productos.html'
    }),
  ]
};