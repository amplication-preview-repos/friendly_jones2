import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FoodMenuResolverBase } from "./base/foodMenu.resolver.base";
import { FoodMenu } from "./base/FoodMenu";
import { FoodMenuService } from "./foodMenu.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FoodMenu)
export class FoodMenuResolver extends FoodMenuResolverBase {
  constructor(
    protected readonly service: FoodMenuService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
