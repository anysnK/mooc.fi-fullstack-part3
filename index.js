const http = require('http')

const port = 3001


const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
})

app.listen(port)
console.log(`server running on port: ${port}`)