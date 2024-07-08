import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TablesServiceBase } from "./base/tables.service.base";

@Injectable()
export class TablesService extends TablesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
