// module.exports = {
//     presets: [['@babel/preset-env', {
//         "targets": {
//           "node": "current"
//         }
//       }], '@babel/preset-react'],
//     };

    module.exports = function (api) {
        api.cache(true)
        return {
            presets: [['@babel/preset-env', {
                "targets": {
                  "node": "current"
                }
              }], '@babel/preset-react'],
            plugins: ['macros'],
        }
      }