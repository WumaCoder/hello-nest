import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from './users/modules/modules.module';
import config from './config';

@Module({
  imports: [MikroOrmModule.forRoot(config().orm), ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
