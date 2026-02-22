import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public"))); // to access /public

app.get("/", (req, res) => {
  res.send("Hey!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`App is running on PORT: ${PORT}`);
});
