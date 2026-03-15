import express from 'express';
import http from "http";
import { Server } from "socket.io";



const app=express();
const server=http.createServer(app);
const io = new Server(server);

const locations = {};

app.set('view engine','ejs');
app.use(express.static("public"));
io.on("connection",(socket)=>{
                                                    
    for (const id in locations) {
        socket.emit("receive-location", { id, ...locations[id] });
    }

    socket.on("send-location",(data)=>{
        locations[socket.id] = data;
        io.emit("receive-location",{id:socket.id,...data});
    });
    socket.on("disconnect",()=>{
        delete locations[socket.id];
        io.emit("user-disconnected",socket.id);
    });
    console.log("connected");

});

app.get('/',(req,res)=>{
    res.render('index');
}   );

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
