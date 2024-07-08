import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WaiterModuleBase } from "./base/waiter.module.base";
import { WaiterService } from "./waiter.service";
import { WaiterController } from "./waiter.controller";
import { WaiterResolver } from "./waiter.resolver";

@Module({
  imports: [WaiterModuleBase, forwardRef(() => AuthModule)],
  controllers: [WaiterController],
  providers: [WaiterService, WaiterResolver],
  exports: [WaiterService],
})
export class WaiterModule {}
