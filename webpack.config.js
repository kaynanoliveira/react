const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: path.resolve(__dirname, "src", "index.js"),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" },
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader" }],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ["file-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true, // limpa a pasta dist a cada build
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),
        compress: true,
        port: 3000,
        open: true,
    },
};
