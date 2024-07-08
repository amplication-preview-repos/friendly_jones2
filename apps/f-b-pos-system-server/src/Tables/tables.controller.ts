import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TablesService } from "./tables.service";

@swagger.ApiTags("tables")
@common.Controller("tables")
export class TablesController {
  constructor(protected readonly service: TablesService) {}

  @common.Delete("/tables/:id")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteTable(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.DeleteTable(body);
      }
}
