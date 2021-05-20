const path = require('path');
const { PanoramaTargetPlugin, PanoramaManifestPlugin } = require('webpack-panorama');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  // entry: {
  //   hud: './index.ts',
  // },
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'scripts/custom_game'),
    publicPath: 'file://{resources}/layout/custom_game/'
  },

   module: {
    rules: [
      { test: /\.xml$/, loader: 'webpack-panorama/lib/layout-loader' },
      { 
        test: /\.js$/,
        issuer: /\.xml$/,
        use: [
          { loader: 'webpack-panorama/lib/entry-loader' },
          { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] }}, 
        ]
      },
      { test: /\.tsx?$/, issuer: /\.xml$/, loader: 'ts-loader', options: { transpileOnly: true } },
    ],
  },

  resolve: {
    // Required because of reverse symlinking
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.xml'],
    symlinks: false,
  },

  plugins: [
    new PanoramaTargetPlugin(),
    new PanoramaManifestPlugin({
      entries: [
        { import: './hud/layout.xml', type: 'Hud' }
      ]
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, "tsconfig.json"),
      },
    }),
  ],
};
