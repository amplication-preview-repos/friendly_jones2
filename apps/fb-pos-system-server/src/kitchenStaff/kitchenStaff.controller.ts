import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KitchenStaffService } from "./kitchenStaff.service";
import { KitchenStaffControllerBase } from "./base/kitchenStaff.controller.base";

@swagger.ApiTags("kitchenStaffs")
@common.Controller("kitchenStaffs")
export class KitchenStaffController extends KitchenStaffControllerBase {
  constructor(
    protected readonly service: KitchenStaffService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
