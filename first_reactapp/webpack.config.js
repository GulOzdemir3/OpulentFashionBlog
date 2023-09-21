const zlib = require.resolve("browserify-zlib");
const querystring = require.resolve("querystring-es3");
const pathBrowserify = require.resolve("path-browserify");
const crypto = require.resolve("crypto-browserify");
const stream = require.resolve("stream-browserify");
const streamHttp = require.resolve("stream-http");

const path = require("path");

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        fallback: {
        zlib: require.resolve("browserify-zlib"),
            querystring: require.resolve("querystring-es3"),
            path: require.resolve("path-browserify"),
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            streamHttp: require.resolve("stream-http"),
        },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //  this loader to be applied to both .js and .jsx files 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};


// module.exports = {
//     resolve: {
//         fallback: {
//             zlib,
//             querystring,
//             path: pathBrowserify,
//             crypto,
//             stream,
//             http: streamHttp
//         }
//     },
// };

// resolve: {
//     fallback: {
//       zlib: require.resolve('browserify-zlib'),
//       querystring: require.resolve('querystring-es3'),
//       path: require.resolve('path-browserify'),
//       crypto: require.resolve('crypto-browserify'),
//       stream: require.resolve('stream-browserify'),
//       http: require.resolve('stream-http')
//     }
//   }