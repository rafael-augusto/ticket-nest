import { User } from 'src/user/entities/user.entity';
import { TicketPriority } from '../model/ticket';

export class CreateTicketDto {
  title: string;
  content: string;
  requester: User;
  priority: TicketPriority;
}
