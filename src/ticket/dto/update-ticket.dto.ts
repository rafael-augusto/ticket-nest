import { PartialType } from '@nestjs/mapped-types';
import { User } from 'src/user/entities/user.entity';
import { TicketPriority, TicketStatus } from '../model/ticket';
import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  assignedTo: User;
  reason: string;
  status: TicketStatus;
  priority: TicketPriority;
}
