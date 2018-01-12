var request = require('request');

var options = {
    url: "http://chanonreoy.com",
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

request(options, function(err, res, body) {  
    if (err) {
        return false;
    } else if (res.statusCode < 400) {
        return true;
    } else {
        return false;
    }
});