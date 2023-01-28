const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'js/dashboard_main.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
}