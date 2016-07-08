var net = require ('net');
var client = new net.Socket();
var host = 'localhost';
var port = 8080;

client.connect( { port: port, host: host} , function() {

});