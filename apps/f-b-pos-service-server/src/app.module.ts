import { Module } from "@nestjs/common";
import { OrderModule } from "./order/order.module";
import { TableModule } from "./table/table.module";
import { BillingModule } from "./billing/billing.module";
import { FoodMenuModule } from "./foodMenu/foodMenu.module";
import { MenuModule } from "./menu/menu.module";
import { InventoryModule } from "./inventory/inventory.module";
import { SalesModule } from "./sales/sales.module";
import { UserModule } from "./user/user.module";
import { ManagerModule } from "./manager/manager.module";
import { OwnerModule } from "./owner/owner.module";
import { CashierModule } from "./cashier/cashier.module";
import { KitchenStaffModule } from "./kitchenStaff/kitchenStaff.module";
import { WaiterModule } from "./waiter/waiter.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    OrderModule,
    TableModule,
    BillingModule,
    FoodMenuModule,
    MenuModule,
    InventoryModule,
    SalesModule,
    UserModule,
    ManagerModule,
    OwnerModule,
    CashierModule,
    KitchenStaffModule,
    WaiterModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
