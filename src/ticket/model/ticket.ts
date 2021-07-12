import { User } from 'src/user/entities/user.entity';

export enum TicketPriority {
  Urgent = 'URGENT',
  High = 'HIGH',
  Normal = 'NORMAL',
  Low = 'LOW',
}

export enum TicketStatus {
  New = 'NEW',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE',
  Closed = 'CLOSED',
  Removed = 'REMOVED',
}

export interface Ticket {
  title: string;
  content: string;
  requester: User;
  assignedTo: User;
  priority: TicketPriority;
  status: TicketStatus;
}
