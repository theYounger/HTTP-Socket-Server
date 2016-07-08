const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Echo server\r\n');
  // socket.write(resIndex);

  socket.on('data', (data) => {
    const dataParse = data.toString();
    // path.basename('public/index.html');
    console.log(dataParse);
    socket.write(resIndex);

  });

  // socket.on()
});

const resIndex = `
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 403
Connection: keep-alive

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Elements</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>The Elements</h1>
  <h2>These are all the known elements.</h2>
  <h3>These are 2</h3>
  <ol>
    <li>
      <a href="/hydrogen.html">Hydrogen</a>
    </li>
    <li>
      <a href="/helium.html">Helium</a>
    </li>
  </ol>
</body>
</html>
`;

server.listen(8080, function() {
  console.log('All ears');
});
