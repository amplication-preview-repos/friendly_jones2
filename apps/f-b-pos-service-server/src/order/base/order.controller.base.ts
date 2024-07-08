/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrderService } from "../order.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrderCreateInput } from "./OrderCreateInput";
import { Order } from "./Order";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderUpdateInput } from "./OrderUpdateInput";
import { BillingFindManyArgs } from "../../billing/base/BillingFindManyArgs";
import { Billing } from "../../billing/base/Billing";
import { BillingWhereUniqueInput } from "../../billing/base/BillingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrderControllerBase {
  constructor(
    protected readonly service: OrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Order })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrder(@common.Body() data: OrderCreateInput): Promise<Order> {
    return await this.service.createOrder({
      data: {
        ...data,

        table: data.table
          ? {
              connect: data.table,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        items: true,
        status: true,
        totalAmount: true,
        waiter: true,

        table: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async orders(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyArgs, request.query);
    return this.service.orders({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        items: true,
        status: true,
        totalAmount: true,
        waiter: true,

        table: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async order(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    const result = await this.service.order({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        items: true,
        status: true,
        totalAmount: true,
        waiter: true,

        table: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrder(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() data: OrderUpdateInput
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
        where: params,
        data: {
          ...data,

          table: data.table
            ? {
                connect: data.table,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          items: true,
          status: true,
          totalAmount: true,
          waiter: true,

          table: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOrder(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          items: true,
          status: true,
          totalAmount: true,
          waiter: true,

          table: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/billings")
  @ApiNestedQuery(BillingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "any",
  })
  async findBillings(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Billing[]> {
    const query = plainToClass(BillingFindManyArgs, request.query);
    const results = await this.service.findBillings(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        paymentMethod: true,
        status: true,

        order: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/billings")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async connectBillings(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: BillingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billings: {
        connect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/billings")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateBillings(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: BillingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billings: {
        set: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/billings")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async disconnectBillings(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: BillingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billings: {
        disconnect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }
}
