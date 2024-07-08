import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CashierServiceBase } from "./base/cashier.service.base";

@Injectable()
export class CashierService extends CashierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
