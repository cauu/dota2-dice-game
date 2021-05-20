const path = require('path');
const { PanoramaTargetPlugin } = require('webpack-panorama');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    hud: './index.ts',
  },

  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'scripts/custom_game'),
  },

   module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } },
      { test: /\.tsx?$/, loader: 'ts-loader', options: { transpileOnly: true } },
    ],
  },

  resolve: {
    // Required because of reverse symlinking
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    symlinks: false,
  },

  plugins: [
    new PanoramaTargetPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, "tsconfig.json"),
      },
    }),
  ],
};
