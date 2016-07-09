const net = require('net');
const fs = require('fs');
const parser = require('./parse.js');

const server = net.createServer((socket) => {

  socket.on('data', (data) => {
    dataString = data.toString();
    console.log('dataString: ', dataString);
    fs.readFile(parser(dataString)[0], (err, data) => {
      console.log('err', err);
      if (err) {
        fs.readFile('./404.html', (err2, errorfile) => {
          console.log('rip');
          socket.write('HTTP/1.1 404 Not Found\r\n\r\n');
          socket.write(errorfile.toString());
          socket.end();
        });
      } else {
        socket.write('HTTP/1.1 200 OK\r\n\r\n' + data.toString());
        socket.end();
      }
    });
  });

});

server.listen(8080, () => {
  console.log('All ears');
});
