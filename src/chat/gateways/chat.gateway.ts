import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { RoomService } from '../services/room.service';

@WebSocketGateway()
export class ChatGateWay implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly roomService: RoomService) { }

  @WebSocketServer() server;
  rooms = {}

  async handleConnection(roomCode: string, user: string) {
    console.log('todo');
  }

  async handleDisconnect() {
    console.log('todo');
  }

  @SubscribeMessage('chat')
  async onChat(client, message) {
    client.broadcast.emit('chat', message);
  }

  @SubscribeMessage('create-room')
  async onCreateRoom(client, user) {
    const newRoom = this.roomService.generateRoomCode();
    this.rooms[newRoom] = {
      user
    }

    client.broadcast.emit('create-room', newRoom);
  }
}
