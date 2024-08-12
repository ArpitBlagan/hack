import express, { Request } from "express";
import cors from "cors";
import { WebSocket, WebSocketServer } from "ws";
import { SocketManager } from "./manager";
import dotenv from "dotenv";
import http from "http";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const instance = SocketManager.getInstance();
const server = http.createServer(app);

const wss = new WebSocketServer({ server });
wss.on("connection", (ws: WebSocket, req: Request) => {
  const url = req.url;
  const userId = url.split("=").pop();
  if (userId) {
    instance.addUser(userId, ws);
  }
  ws.on("message", () => {});
  ws.on("close", () => {
    console.log("connection closed:(");
    instance.removeUser(ws);
  });
});
server.listen(process.env.PORT || 9000, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
