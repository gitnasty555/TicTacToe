const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx',],
    },
    module: {
        rules: [
            // Rule for JSX files
            {
                test: /\.(?:js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }],
                            ["@babel/preset-react"],
                        ]
                    }
                }
            },
            // Rule for non-JSX JavaScript files
            {
                test: /\.(?:mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
        ]
    },
};