// Express Setup //
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/dist'))

app.listen(8080, () => console.log('Server listening on port 8080!'));