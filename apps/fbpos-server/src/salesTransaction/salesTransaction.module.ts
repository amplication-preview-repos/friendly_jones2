import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalesTransactionModuleBase } from "./base/salesTransaction.module.base";
import { SalesTransactionService } from "./salesTransaction.service";
import { SalesTransactionController } from "./salesTransaction.controller";
import { SalesTransactionResolver } from "./salesTransaction.resolver";

@Module({
  imports: [SalesTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalesTransactionController],
  providers: [SalesTransactionService, SalesTransactionResolver],
  exports: [SalesTransactionService],
})
export class SalesTransactionModule {}
