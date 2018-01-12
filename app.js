let path = require('path');
let port = process.env.PORT || 3000;
let morgan = require('morgan');
let express = require('express');
let bodyParser = require('body-parser');
let favicon = require('serve-favicon');
let rp = require('request-promise');

let app = express();

// Static Files


// Middleware (Logging)
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/check', (req, res) => {
    let link = req.query.url;

    if (link) {
        rp(link)
        .then((response) => {
            res.send('true');
        })
        .catch((error) => {
            console.log(error);
            res.send('false');
        });
    } else {
        res.send("Link was not valid");
    }

});

// Port Listener
app.listen(port, () => {
    console.log('Server started on Port ' + port + '...');
});