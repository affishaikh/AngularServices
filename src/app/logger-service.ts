import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  loggerProperty: string = "Logger property";

  constructor() {}

  log(message: string) {
    console.log(message);
  }
}
