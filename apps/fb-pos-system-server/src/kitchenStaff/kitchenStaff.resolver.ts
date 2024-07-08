import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KitchenStaffResolverBase } from "./base/kitchenStaff.resolver.base";
import { KitchenStaff } from "./base/KitchenStaff";
import { KitchenStaffService } from "./kitchenStaff.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KitchenStaff)
export class KitchenStaffResolver extends KitchenStaffResolverBase {
  constructor(
    protected readonly service: KitchenStaffService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
