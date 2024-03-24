const http = require('http');
const fs = require('fs');

const PORT = 8080;
const index = fs.readFileSync('./index.html');

http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'html' });
		res.end(index);
	})
	.listen(PORT, () => console.log(`Server running on port ${PORT}`));
