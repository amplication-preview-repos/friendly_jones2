/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Waiter as PrismaWaiter } from "@prisma/client";

export class WaiterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WaiterCountArgs, "select">): Promise<number> {
    return this.prisma.waiter.count(args);
  }

  async waiters(args: Prisma.WaiterFindManyArgs): Promise<PrismaWaiter[]> {
    return this.prisma.waiter.findMany(args);
  }
  async waiter(
    args: Prisma.WaiterFindUniqueArgs
  ): Promise<PrismaWaiter | null> {
    return this.prisma.waiter.findUnique(args);
  }
  async createWaiter(args: Prisma.WaiterCreateArgs): Promise<PrismaWaiter> {
    return this.prisma.waiter.create(args);
  }
  async updateWaiter(args: Prisma.WaiterUpdateArgs): Promise<PrismaWaiter> {
    return this.prisma.waiter.update(args);
  }
  async deleteWaiter(args: Prisma.WaiterDeleteArgs): Promise<PrismaWaiter> {
    return this.prisma.waiter.delete(args);
  }
}
