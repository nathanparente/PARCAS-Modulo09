const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'script.js',
        path:path.resolve(__dirname, 'dist')
    },
    mode:'production',
    module: {
        rules:[
            {test:/\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
};