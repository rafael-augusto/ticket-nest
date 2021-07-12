import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket, TicketStatus } from './model/ticket';
import { TicketDocument, TicketModel } from './schema/ticket.schema';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(TicketModel.name) private ticketModel: Model<TicketDocument>,
  ) {}

  async create(dto: CreateTicketDto): Promise<Ticket> {
    const newTicket = this.createTicketSetStatus(dto);
    const newTicketModel = new this.ticketModel(newTicket);
    return await newTicketModel.save();
  }

  async findAll(): Promise<Ticket[]> {
    return await this.ticketModel.find().exec();
  }

  async findOne(id: number): Promise<Ticket> {
    const ticketDb = await this.ticketModel.findById(id).exec();
    return ticketDb;
  }

  async update(id: number, updateDto: UpdateTicketDto) {
    //TODO: Validar retorno updateOne
    const result = await this.ticketModel.updateOne(
      { _id: { $eq: id } },
      updateDto,
    );
  }

  async remove(id: number) {
    const result = await this.ticketModel.deleteOne({ _id: { $eq: id } });
  }

  private createTicketSetStatus(createTicketDto: CreateTicketDto): Ticket {
    return {
      status: TicketStatus.New,
      ...createTicketDto,
    } as Ticket;
  }
}
