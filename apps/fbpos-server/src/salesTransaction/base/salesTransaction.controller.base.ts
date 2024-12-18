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
import { SalesTransactionService } from "../salesTransaction.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SalesTransactionCreateInput } from "./SalesTransactionCreateInput";
import { SalesTransaction } from "./SalesTransaction";
import { SalesTransactionFindManyArgs } from "./SalesTransactionFindManyArgs";
import { SalesTransactionWhereUniqueInput } from "./SalesTransactionWhereUniqueInput";
import { SalesTransactionUpdateInput } from "./SalesTransactionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SalesTransactionControllerBase {
  constructor(
    protected readonly service: SalesTransactionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SalesTransaction })
  @nestAccessControl.UseRoles({
    resource: "SalesTransaction",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSalesTransaction(
    @common.Body() data: SalesTransactionCreateInput
  ): Promise<SalesTransaction> {
    return await this.service.createSalesTransaction({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        timestamp: true,
        totalAmount: true,
        paymentMethod: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SalesTransaction] })
  @ApiNestedQuery(SalesTransactionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SalesTransaction",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async salesTransactions(
    @common.Req() request: Request
  ): Promise<SalesTransaction[]> {
    const args = plainToClass(SalesTransactionFindManyArgs, request.query);
    return this.service.salesTransactions({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        timestamp: true,
        totalAmount: true,
        paymentMethod: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SalesTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SalesTransaction",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async salesTransaction(
    @common.Param() params: SalesTransactionWhereUniqueInput
  ): Promise<SalesTransaction | null> {
    const result = await this.service.salesTransaction({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        timestamp: true,
        totalAmount: true,
        paymentMethod: true,
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
  @swagger.ApiOkResponse({ type: SalesTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SalesTransaction",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSalesTransaction(
    @common.Param() params: SalesTransactionWhereUniqueInput,
    @common.Body() data: SalesTransactionUpdateInput
  ): Promise<SalesTransaction | null> {
    try {
      return await this.service.updateSalesTransaction({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          timestamp: true,
          totalAmount: true,
          paymentMethod: true,
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
  @swagger.ApiOkResponse({ type: SalesTransaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SalesTransaction",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSalesTransaction(
    @common.Param() params: SalesTransactionWhereUniqueInput
  ): Promise<SalesTransaction | null> {
    try {
      return await this.service.deleteSalesTransaction({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          timestamp: true,
          totalAmount: true,
          paymentMethod: true,
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
}
