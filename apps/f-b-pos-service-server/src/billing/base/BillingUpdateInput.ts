/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumBillingPaymentMethod } from "./EnumBillingPaymentMethod";
import { EnumBillingStatus } from "./EnumBillingStatus";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class BillingUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumBillingPaymentMethod,
  })
  @IsEnum(EnumBillingPaymentMethod)
  @IsOptional()
  @Field(() => EnumBillingPaymentMethod, {
    nullable: true,
  })
  paymentMethod?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumBillingStatus,
  })
  @IsEnum(EnumBillingStatus)
  @IsOptional()
  @Field(() => EnumBillingStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;
}

export { BillingUpdateInput as BillingUpdateInput };
