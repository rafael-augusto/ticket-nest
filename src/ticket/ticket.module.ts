import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModel, TicketSchema } from './schema/ticket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TicketModel.name, schema: TicketSchema },
    ]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
