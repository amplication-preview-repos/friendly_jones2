import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KitchenStaffModuleBase } from "./base/kitchenStaff.module.base";
import { KitchenStaffService } from "./kitchenStaff.service";
import { KitchenStaffController } from "./kitchenStaff.controller";
import { KitchenStaffResolver } from "./kitchenStaff.resolver";

@Module({
  imports: [KitchenStaffModuleBase, forwardRef(() => AuthModule)],
  controllers: [KitchenStaffController],
  providers: [KitchenStaffService, KitchenStaffResolver],
  exports: [KitchenStaffService],
})
export class KitchenStaffModule {}
