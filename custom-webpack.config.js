const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path")


module.exports = {

  plugins: [
    new webpack.DefinePlugin({
      FEATURE_FLAG: `'PROD'`,
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './node_modules/@getyoti/react-face-capture/assets'),
          to: path.resolve(__dirname, './src/assets')
        }
      ],
    }),
  ],
};
