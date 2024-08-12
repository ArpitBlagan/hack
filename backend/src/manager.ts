import { WebSocket } from "ws";

interface info {
  id: string;
  socket: WebSocket;
}

export class SocketManager {
  private users: Map<string, WebSocket>;
  private infoUser: info[];
  private static instance: SocketManager;

  constructor() {
    this.users = new Map();
    this.infoUser = [];
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new SocketManager();
    }
    return this.instance;
  }
  addUser(userId: string, socket: WebSocket) {
    this.removeUser(socket);
    this.infoUser.push({ id: userId, socket });
    this.users.set(userId, socket);
  }
  removeUser(socket: WebSocket) {
    let ele = this.infoUser.find((ele) => ele.socket == socket);
    if (ele) {
      const arr = this.infoUser.filter((ele) => ele.socket != socket);
      this.infoUser = arr;
      this.users.delete(ele.id);
    }
  }
}
