const app = require("express")()
const http = require("http").createServer(app)
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
        methods: "*"
    }
})

io.on("connection", socket => {
    console.log("A user has connected!")
    socket.on("client:message", message => {
        console.log("Message", message)
        io.emit("server:message", message)
    })
})

http.listen(4000, () => {
    console.log("I'm listenting on port 4000!")
})