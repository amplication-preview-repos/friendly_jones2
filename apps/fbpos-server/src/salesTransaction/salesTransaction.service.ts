import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesTransactionServiceBase } from "./base/salesTransaction.service.base";

@Injectable()
export class SalesTransactionService extends SalesTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
