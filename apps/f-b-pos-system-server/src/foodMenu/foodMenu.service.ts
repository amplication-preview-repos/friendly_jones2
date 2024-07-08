import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FoodMenuServiceBase } from "./base/foodMenu.service.base";

@Injectable()
export class FoodMenuService extends FoodMenuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
