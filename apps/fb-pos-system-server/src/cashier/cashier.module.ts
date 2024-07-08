import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CashierModuleBase } from "./base/cashier.module.base";
import { CashierService } from "./cashier.service";
import { CashierController } from "./cashier.controller";
import { CashierResolver } from "./cashier.resolver";

@Module({
  imports: [CashierModuleBase, forwardRef(() => AuthModule)],
  controllers: [CashierController],
  providers: [CashierService, CashierResolver],
  exports: [CashierService],
})
export class CashierModule {}
