import { Module } from "@nestjs/common";
import { RoleModule } from "./role/role.module";
import { TableModule } from "./table/table.module";
import { FoodMenuModule } from "./foodMenu/foodMenu.module";
import { SalesModule } from "./sales/sales.module";
import { MenuModule } from "./menu/menu.module";
import { BillingModule } from "./billing/billing.module";
import { InventoryModule } from "./inventory/inventory.module";
import { UserModule } from "./user/user.module";
import { TablesModule } from "./Tables/tables.module";
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
    RoleModule,
    TableModule,
    FoodMenuModule,
    SalesModule,
    MenuModule,
    BillingModule,
    InventoryModule,
    UserModule,
    TablesModule,
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
