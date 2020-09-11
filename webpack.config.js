const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  devServer: {
    port: '3200',
    host: '127.0.0.1',
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  devtool: 'inline-source-map',
  entry: ['@babel/polyfill', './src/popup.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'js/[name]/[name]-bundle.js',
    chunkFilename: 'js/[name]/[name]-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 1024 * 15,
              fallback: 'file-loader',
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      filename: './index.html',
      template: './public/index.html',
    }),

    new CleanWebpackPlugin(),

    new HotModuleReplacementPlugin(),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        // 打包业务中公共代码
        common: {
          name: 'common',
          chunks: 'initial',
          minSize: 1,
          priority: 0,
          minChunks: 2, // 同时引用了2次才打包
        },
        // 打包第三方库的文件
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 10,
          minChunks: 2, // 同时引用了2次才打包
        },
      },
    },
    runtimeChunk: { name: 'manifest' }, // 运行时代码
  },

  resolve: {
    alias: {
      '@': path.resolve('./src/'),
    },
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
