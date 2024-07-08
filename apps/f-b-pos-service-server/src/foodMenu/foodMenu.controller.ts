import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FoodMenuService } from "./foodMenu.service";
import { FoodMenuControllerBase } from "./base/foodMenu.controller.base";

@swagger.ApiTags("foodMenus")
@common.Controller("foodMenus")
export class FoodMenuController extends FoodMenuControllerBase {
  constructor(
    protected readonly service: FoodMenuService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
