
const zlib = require.resolve("browserify-zlib");
const querystring = require.resolve("querystring-es3");
const pathBrowserify = require.resolve("path-browserify");
const crypto = require.resolve("crypto-browserify");
const stream = require.resolve("stream-browserify");
const streamHttp = require.resolve("stream-http");


const path = require("path");


module.exports = {
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