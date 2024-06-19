const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.js', // Đường dẫn đến file entry của ứng dụng Vue.js
    output: {
        path: path.resolve(__dirname, './dist'), // Thư mục đầu ra sau khi build
        publicPath: '/dist/', // Đường dẫn công khai của file đầu ra
        filename: 'build.js' // Tên file đầu ra
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // Xử lý các file có đuôi .vue
                loader: 'vue-loader', // Sử dụng vue-loader để biên dịch Vue SFC
                options: {
                    loaders: {
                        // Các tùy chọn khác của vue-loader
                    }
                }
            },
            {
                test: /\.js$/, // Xử lý các file có đuôi .js
                exclude: /node_modules/, // Không xử lý các file trong node_modules
                use: {
                    loader: 'babel-loader', // Sử dụng babel-loader để biên dịch JavaScript
                    options: {
                        presets: ['@babel/preset-env'] // Sử dụng preset-env để hỗ trợ ES6/ES7
                    }
                }
            },
            {
                test: /\.css$/, // Xử lý các file có đuôi .css
                use: [
                    'vue-style-loader', // Sử dụng vue-style-loader để load CSS vào DOM
                    'css-loader' // Sử dụng css-loader để load CSS từ file .css
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Xử lý các file hình ảnh
                loader: 'file-loader', // Sử dụng file-loader để load file hình ảnh
                options: {
                    name: '[name].[ext]?[hash]' // Đổi tên file khi build để tránh cache
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'], // Các đuôi file mà webpack sẽ xử lý
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // Alias cho Vue.js để sử dụng phiên bản có hỗ trợ ES Module
        }
    },
    devServer: {
        historyApiFallback: true, // Cho phép routing client-side cho tất cả các URL
        noInfo: true, // Tắt thông báo không cần thiết
        overlay: true // Hiển thị lỗi trên màn hình trình duyệt
    },
    performance: {
        hints: false // Tắt cảnh báo hiệu năng
    },
    devtool: '#eval-source-map' // Cấu hình cho sourcemaps
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'; // Cấu hình sourcemaps cho production
    // Thêm các plugin để tối ưu hóa và giảm kích thước của bundle JavaScript
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}
