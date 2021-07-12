import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';
import { Ticket, TicketPriority, TicketStatus } from '../model/ticket';

export type TicketDocument = TicketModel & Document;

@Schema()
export class TicketModel implements Ticket {
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  requester: User;
  @Prop()
  assignedTo: User;
  @Prop()
  priority: TicketPriority;
  @Prop()
  status: TicketStatus;
}

export const TicketSchema = SchemaFactory.createForClass(TicketModel);
