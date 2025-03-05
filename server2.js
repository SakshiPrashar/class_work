// BUILDING A SIMPLE API  OR CREATING ENDPOINTS

import { createServer } from 'http';

const PORT = process.env.PORT || 8000;

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' }
];

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
    // Get user by ID
    else if (req.method === 'GET' && req.url.match(/^\/api\/users\/([0-9]+)/)) {
        res.setHeader(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({id:1,name:'John Doe'}));
        res.end();
    }
  

    // GET ID FROM URL
    /*else if (req.method === 'GET' && req.url.match(/^\/api\/users\/([0-9]+)/)) {
        const id=req.url.split('/')[3];
        console.log(id);
        res.setHeader(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({id:1,name:'John Doe'}));
        res.end();
    }*/


    //GET USER FROM URL
    /*else if (req.method === 'GET' && req.url.match(/^\/api\/users\/([0-9]+)/)) {
        const id=req.url.split('/')[3];
        const user =users.find((user)=>user.id===parseInt(id));
        if(user){
        res.setHeader(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({id:1,name:'John Doe'}));
        res.end();
    }else{
        res.setHeader('Content-Type','application/json' );
        res.statusCode=404;
        res.write(JSON.stringify({ message: 'user not found' }));
        res.end();
    }
}*/
    
      

    // Route not found
    else{
        res.setHeader('Content-Type','application/json' );
            res.statusCode=404;
            res.write(JSON.stringify({ message: 'Route not found' }));
            res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
