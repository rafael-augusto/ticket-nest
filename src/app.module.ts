import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('<mongodbConnection>', {
      useNewUrlParser: true,
    }),
    TicketModule,
    UserModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
