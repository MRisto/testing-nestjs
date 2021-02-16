import { Injectable } from '@nestjs/common';
import { DepService } from './dep.service';

@Injectable()
export class TestService {
  constructor(private depService: DepService) {
    this.depService.prepareSomething();
    console.log(this.depService.doSomething('hallo'));
  }

  returnData(x: string) {
    return this.depService.doSomething(x);
  }
}
