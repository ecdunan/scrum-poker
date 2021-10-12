import { Module } from '@nestjs/common';
import { ChatGateWay } from './gateways/chat.gateway';
import { RoomService } from './services/room.service';

@Module({
    providers: [ChatGateWay, RoomService]
})
export class ChatModule { }
