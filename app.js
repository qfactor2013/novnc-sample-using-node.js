var express = require('express');
const path = require('path');
const websockify = require('node-websockify');
websockify({
    source: 'localhost:6080',
    target: 'localhost:5900',
    // web : './',
    // cert: 'certSSL',
    // key: 'certSSL-key'
});
var app = express();

app.use('/app',express.static(path.resolve(__dirname, './app')))
app.use('/core',express.static(path.resolve(__dirname, './core')))
app.use('/vendor',express.static(path.resolve(__dirname, './vendor')))

app.engine('html', require('ejs').renderFile)
app.set('views', __dirname + '/');
app.set('view engine', 'html')

app.get('/', function (req, res) {
    res.render('./vnc.html')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

