// eslint-disable-next-line import/no-unresolved
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const express = require('express');
const debug = require('debug')('app');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css/')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
