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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'form-carrito.html',
        template: './src/views/carrito.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'form-oferta.html',
      template: './src/views/form-oferta.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'landingpage.html',
      template: './src/views/landingpage.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'productos-decoraciones.html',
      template: './src/views/productos-decoraciones.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'productos-regalos.html',
      template: './src/views/productos-regalos.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'productos.html',
      template: './src/views/productos.html'
    }),
    new MiniCssExtractPlugin({
        filename: 'style.css'
    }),
]
};