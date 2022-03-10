const path = require('path')
const HtmlWebpacPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: {
    app: './index.jsx'
  },
  context: path.resolve(__dirname, './src'),
  output: {
   path: path.resolve(__dirname, 'public'),
   filename:'app.js'
  },
  devServer:{
    compress: true,
    port: 9090,
    historyApiFallback:{
      index: 'index.html'
    }
  },
  plugins: [
  new HtmlWebpacPlugin({
    template: path.resolve(__dirname, './template.html'),
    filename: 'index.html'
  })
  ],
  module:{
    rules:[
      { test: /\.(js|jsx)$/, 
        include: path.resolve(__dirname, "src"),
        loader: 'babel-loader',
        exclude: /node_modules/,
        options:{
          presets: ['@babel/env', '@babel/react'],
          plugins: [
            [
              "@babel/plugin-proposal-class-properties",
              {
                "loose": true
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ]
  },
  resolve: {
    modules: [`${__dirname}/src`, 'node_modules'],
    extensions: ['.js', '.jsx'],
  }
}