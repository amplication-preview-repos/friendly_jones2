import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KitchenStaffServiceBase } from "./base/kitchenStaff.service.base";

@Injectable()
export class KitchenStaffService extends KitchenStaffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
