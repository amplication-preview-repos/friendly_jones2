import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SalesTransactionService } from "./salesTransaction.service";
import { SalesTransactionControllerBase } from "./base/salesTransaction.controller.base";

@swagger.ApiTags("salesTransactions")
@common.Controller("salesTransactions")
export class SalesTransactionController extends SalesTransactionControllerBase {
  constructor(
    protected readonly service: SalesTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
