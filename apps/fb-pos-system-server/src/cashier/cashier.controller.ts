import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CashierService } from "./cashier.service";
import { CashierControllerBase } from "./base/cashier.controller.base";

@swagger.ApiTags("cashiers")
@common.Controller("cashiers")
export class CashierController extends CashierControllerBase {
  constructor(
    protected readonly service: CashierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
