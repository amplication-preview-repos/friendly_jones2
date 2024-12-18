import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SalesTransactionResolverBase } from "./base/salesTransaction.resolver.base";
import { SalesTransaction } from "./base/SalesTransaction";
import { SalesTransactionService } from "./salesTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SalesTransaction)
export class SalesTransactionResolver extends SalesTransactionResolverBase {
  constructor(
    protected readonly service: SalesTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
