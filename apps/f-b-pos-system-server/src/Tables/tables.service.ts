import { Injectable } from "@nestjs/common";

@Injectable()
export class TablesService {
  constructor() {}
  async DeleteTable(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
