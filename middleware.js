import http from 'http';

// Middleware function
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Move to the next middleware or route handler
};

// Server setup
const server = http.createServer((req, res) => {
    loggerMiddleware(req, res, () => { // Use middleware
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, world!');
    });
});

server.listen(8000, () => console.log('Server running on port 8000'));
