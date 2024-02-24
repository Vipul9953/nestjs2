import { Module } from '@nestjs/common'
import { BookModule } from './book/book.module'
@Module({
  imports: [BookModule],
  controllers: [],
  // providers: [{ provide: UserStore, useClass: UserStore }],
  providers: [],
})
export class AppModule {}
