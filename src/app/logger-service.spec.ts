import { TestBed, async } from "@angular/core/testing";

import { LoggerService } from "./logger-service";

describe("GoogleServiceService", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    }).compileComponents();
  }));

  it("should be created", () => {
    const service: LoggerService = TestBed.get(LoggerService);
    expect(service).toBeTruthy();
  });
});
