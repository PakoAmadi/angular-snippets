var config = require('./config'),
    express = require('express'),
    request = require('request'),
    //allows for file system access
    fs = require('fs'),
    app = express(),
    server = require('http').createServer(app),
    mockFileRoot = config.data_location;

// CONFIG SERVER

//allows us to write cookies
app.use(express.cookieParser());

//allows server to run as proxy
app.enable('trust proxy');
app.use(express.bodyParser());
//serve the "compiled" build folder
app.use(express.static(config.static_site_root));

// DEFINE ENDPOINTS

app.post('/file', function(req,res) {
    console.log(req);
    res.send(200);
});

app.get(config.rest_base_url, function (req, res) {
    var endpoint,
        splitPath = req.params[0].split("/"),
        mockPath = mockFileRoot + req.params[0],
        mockResponse;

    if (splitPath.length > 2)
        endpoint = splitPath[splitPath.length - 2];

    console.log(endpoint, req.params[0])

    try {
        mockResponse = JSON.parse(fs.readFileSync(mockPath));
        res.send(200, mockResponse)
    } catch (err) {
        console.log(err);
        res.send(500);
    }
});

// FIRE IT UP

server.listen(config.port, function () {
    console.log("Express server listening on port %d", config.port);
});
