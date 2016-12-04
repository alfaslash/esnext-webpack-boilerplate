const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack-dependence/webpack.dev');

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(express.static(path.join(__dirname, './dist/')));

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    reporter: null,
    stats: 'minimal',
    publicPath: '/build/',
    watchOptions: {
        aggregateTimeout: 100,
        pool: 1000
    }
}));

app.get('/', (req, res) => {
    res.render(path.resolve('./dist/index.html'));
});

app.listen(port, 'localhost', (err) => {
    if (err) {
        console.error(err);
    }
    return console.info(`==> Listening on port ${port}. Open up http://localhost:${port} in your browser.`);
});
