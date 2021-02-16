import { Injectable } from '@nestjs/common';

@Injectable()
export class DepService {
  constructor() {}

  prepareSomething(){
    console.log("Prepared something for you");
  }

  doSomething(x: string) {
    return x;
  }
}
