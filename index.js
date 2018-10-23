// Setup API to server Dashboard using Express

const http = require('http');
const path = require('path');
const express = require('express');
const debug = require('debug')('debug-config:launch');

const app = express();
const httpServer = http.Server(app);

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/break', (req, res) => {
    res.send('Set breakpoint here');
});

const HTTP_PORT = process.env.PORT || 3000;

httpServer.listen(HTTP_PORT, () => {
    debug(`HTTP Server listening on ${HTTP_PORT}`);
});
