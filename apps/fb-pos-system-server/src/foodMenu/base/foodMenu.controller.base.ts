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
import { FoodMenuService } from "../foodMenu.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FoodMenuCreateInput } from "./FoodMenuCreateInput";
import { FoodMenu } from "./FoodMenu";
import { FoodMenuFindManyArgs } from "./FoodMenuFindManyArgs";
import { FoodMenuWhereUniqueInput } from "./FoodMenuWhereUniqueInput";
import { FoodMenuUpdateInput } from "./FoodMenuUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FoodMenuControllerBase {
  constructor(
    protected readonly service: FoodMenuService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FoodMenu })
  @nestAccessControl.UseRoles({
    resource: "FoodMenu",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFoodMenu(
    @common.Body() data: FoodMenuCreateInput
  ): Promise<FoodMenu> {
    return await this.service.createFoodMenu({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        itemName: true,
        price: true,
        remainingQuantity: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FoodMenu] })
  @ApiNestedQuery(FoodMenuFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FoodMenu",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async foodMenus(@common.Req() request: Request): Promise<FoodMenu[]> {
    const args = plainToClass(FoodMenuFindManyArgs, request.query);
    return this.service.foodMenus({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        itemName: true,
        price: true,
        remainingQuantity: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FoodMenu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FoodMenu",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async foodMenu(
    @common.Param() params: FoodMenuWhereUniqueInput
  ): Promise<FoodMenu | null> {
    const result = await this.service.foodMenu({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        itemName: true,
        price: true,
        remainingQuantity: true,
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
  @swagger.ApiOkResponse({ type: FoodMenu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FoodMenu",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFoodMenu(
    @common.Param() params: FoodMenuWhereUniqueInput,
    @common.Body() data: FoodMenuUpdateInput
  ): Promise<FoodMenu | null> {
    try {
      return await this.service.updateFoodMenu({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          itemName: true,
          price: true,
          remainingQuantity: true,
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
  @swagger.ApiOkResponse({ type: FoodMenu })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FoodMenu",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFoodMenu(
    @common.Param() params: FoodMenuWhereUniqueInput
  ): Promise<FoodMenu | null> {
    try {
      return await this.service.deleteFoodMenu({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          itemName: true,
          price: true,
          remainingQuantity: true,
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
