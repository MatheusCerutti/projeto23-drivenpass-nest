import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';
import { CardsModule } from './cards/cards.module';
import { SafeNotesModule } from './safe_notes/safe_notes.module';
import { EraseModule } from './erase/erase.module';
import { CredentialsModule } from './credentials/credentials.module';
import { AuthModule } from './auth/auth.module';
import { CryptoModule } from './crypto/crypto.module';

@Module({
  imports: [PrismaModule, UsersModule, HealthModule, CardsModule, SafeNotesModule, EraseModule, CredentialsModule, AuthModule, CryptoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
