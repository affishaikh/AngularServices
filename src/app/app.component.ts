import { Component } from "@angular/core";
import { LoggerService } from "./logger-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log("This is the example of a service");
  }
}
