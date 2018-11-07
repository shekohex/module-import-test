import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  Module1Module,
  Module2Module,
  Module3Module,
  Module4Module,
  Module5Module,
  Module6Module,
  Module7Module,
} from './my-modules';

@Module({
  imports: [
    Module1Module,
    Module2Module,
    Module3Module,
    Module4Module,
    Module5Module,
    Module6Module,
    Module7Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
