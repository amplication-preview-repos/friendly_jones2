import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WaiterService } from "./waiter.service";
import { WaiterControllerBase } from "./base/waiter.controller.base";

@swagger.ApiTags("waiters")
@common.Controller("waiters")
export class WaiterController extends WaiterControllerBase {
  constructor(
    protected readonly service: WaiterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
