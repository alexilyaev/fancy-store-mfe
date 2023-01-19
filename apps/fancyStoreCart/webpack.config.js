const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('./package.json').dependencies;

// Settings
const appEnv = process.env.NODE_ENV || 'development';
const isProduction = appEnv === 'production';

module.exports = {
  output: {
    publicPath: 'http://localhost:8082/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 8082,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'fancyStoreCart',
      filename: 'remoteEntry.js',
      remotes: {
        fancyStore: 'fancyStore@http://localhost:8080/remoteEntry.js',
      },
      exposes: {
        './bootstrap': './src/bootstrap',
        './Cart': './src/components/Cart.tsx',
        './CartSummary': './src/components/CartSummary.tsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],

  devtool: isProduction ? 'source-map' : 'inline-source-map',
};
