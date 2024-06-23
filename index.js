// Vercel app url: https://web322-lab1.vercel.app/

const http = require('http');

const server = http.createServer((req, res) => {
    
    const currentTime = new Date().toISOString();
    res.write('<html><body>');
    res.write('<h1>Vladimir Arbuzov - WEB322</h1>');
    res.write(`${currentTime}`);
    res.write('</body></html>');
    
    res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
