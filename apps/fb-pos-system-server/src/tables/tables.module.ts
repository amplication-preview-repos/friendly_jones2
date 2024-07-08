import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TablesModuleBase } from "./base/tables.module.base";
import { TablesService } from "./tables.service";
import { TablesController } from "./tables.controller";
import { TablesResolver } from "./tables.resolver";

@Module({
  imports: [TablesModuleBase, forwardRef(() => AuthModule)],
  controllers: [TablesController],
  providers: [TablesService, TablesResolver],
  exports: [TablesService],
})
export class TablesModule {}
