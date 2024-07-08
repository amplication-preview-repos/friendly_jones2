import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FoodMenuModuleBase } from "./base/foodMenu.module.base";
import { FoodMenuService } from "./foodMenu.service";
import { FoodMenuController } from "./foodMenu.controller";
import { FoodMenuResolver } from "./foodMenu.resolver";

@Module({
  imports: [FoodMenuModuleBase, forwardRef(() => AuthModule)],
  controllers: [FoodMenuController],
  providers: [FoodMenuService, FoodMenuResolver],
  exports: [FoodMenuService],
})
export class FoodMenuModule {}
