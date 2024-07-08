import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TablesService } from "./tables.service";
import { TablesControllerBase } from "./base/tables.controller.base";

@swagger.ApiTags("tables")
@common.Controller("tables")
export class TablesController extends TablesControllerBase {
  constructor(
    protected readonly service: TablesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
