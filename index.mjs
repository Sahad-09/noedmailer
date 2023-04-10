import http from 'http'

const port = 5000

const server = http.createServer((req, res)=>{
    res.end("Hello world")
})

server.listen(port, ()=>{
    console.log(`Listening on port number ${port}`);
})