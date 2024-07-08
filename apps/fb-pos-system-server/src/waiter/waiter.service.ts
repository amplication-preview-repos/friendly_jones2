import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaiterServiceBase } from "./base/waiter.service.base";

@Injectable()
export class WaiterService extends WaiterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
