const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to Home page.')
    }
    else if(req.url === '/about'){
        res.end('Here you can find my short story.')
    }
    else{
        res.end(`<h1>Ooopss!</h1>
                <p>We can't seem to find that page</p>
                <a href="/">back home</a>`)
    }

})

server.listen(5000);