const path = require('path');
const { PanoramaTargetPlugin, PanoramaManifestPlugin } = require('webpack-panorama');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    hud: './hud/index.tsx',
    gameSetup: './gameSetup/index.tsx'
  },
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'scripts/custom_game'),
  },

   module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] }}, 
        ]
      },
      { 
        test: /\.(tsx|ts)?$/,
        use: [
          { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] }}, 
          { loader: 'ts-loader', options: { transpileOnly: true }},
        ]
      },
      { 
        test: /\.less$/, 
        use: [
          { loader: 'file-loader', options: { name: '[path][name].css', esModule: false }},
          { loader: 'less-loader' }
        ]
      }
    ],
  },

  resolve: {
    // Required because of reverse symlinking
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.xml'],
    symlinks: false,
  },

  plugins: [
    new PanoramaTargetPlugin(),
    // new PanoramaManifestPlugin({
    //   entries: [
    //     { import: './hud/layout.xml', type: 'Hud' }
    //   ]
    // }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, "tsconfig.json"),
      },
    }),
  ],
};
