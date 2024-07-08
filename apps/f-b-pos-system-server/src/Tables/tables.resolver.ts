import * as graphql from "@nestjs/graphql";
import { TablesService } from "./tables.service";

export class TablesResolver {
  constructor(protected readonly service: TablesService) {}

  @graphql.Mutation(() => Boolean)
  async DeleteTable(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.DeleteTable(args);
  }
}
