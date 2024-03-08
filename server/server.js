const http = require('http');

const server = http.createServer()
const port = 3000; // Ви можете вибрати будь-який вільний порт
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});
