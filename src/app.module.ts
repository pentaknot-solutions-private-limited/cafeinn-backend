import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GamingModule } from './gaming/gaming.module';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MachineTypeModule } from './masters/machine-type/machine-type.module';
import { CategoryModule } from './masters/category/category.module';
import { InventoryModule } from './masters/inventory/inventory.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://cafeinntech:R1G4IGErmxUOzdSB@cluster0.hqxseni.mongodb.net/?retryWrites=true&w=majority`,
    ),
    AuthModule,
    GamingModule,
    CustomerModule,
    AdminModule,
    // masters
    MachineTypeModule,
    CategoryModule,
    InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
