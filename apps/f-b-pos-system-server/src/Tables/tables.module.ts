import { Module } from "@nestjs/common";
import { TablesService } from "./tables.service";
import { TablesController } from "./tables.controller";
import { TablesResolver } from "./tables.resolver";

@Module({
  controllers: [TablesController],
  providers: [TablesService, TablesResolver],
  exports: [TablesService],
})
export class TablesModule {}
