/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, KitchenStaff as PrismaKitchenStaff } from "@prisma/client";

export class KitchenStaffServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.KitchenStaffCountArgs, "select">
  ): Promise<number> {
    return this.prisma.kitchenStaff.count(args);
  }

  async kitchenStaffs(
    args: Prisma.KitchenStaffFindManyArgs
  ): Promise<PrismaKitchenStaff[]> {
    return this.prisma.kitchenStaff.findMany(args);
  }
  async kitchenStaff(
    args: Prisma.KitchenStaffFindUniqueArgs
  ): Promise<PrismaKitchenStaff | null> {
    return this.prisma.kitchenStaff.findUnique(args);
  }
  async createKitchenStaff(
    args: Prisma.KitchenStaffCreateArgs
  ): Promise<PrismaKitchenStaff> {
    return this.prisma.kitchenStaff.create(args);
  }
  async updateKitchenStaff(
    args: Prisma.KitchenStaffUpdateArgs
  ): Promise<PrismaKitchenStaff> {
    return this.prisma.kitchenStaff.update(args);
  }
  async deleteKitchenStaff(
    args: Prisma.KitchenStaffDeleteArgs
  ): Promise<PrismaKitchenStaff> {
    return this.prisma.kitchenStaff.delete(args);
  }
}
