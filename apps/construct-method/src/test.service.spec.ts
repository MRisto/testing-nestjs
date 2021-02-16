import { Test, TestingModule } from '@nestjs/testing';
import { DepService } from './dep.service';
import { TestService } from './test.service';

describe(TestService.name, () => {
  let testService: TestService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        TestService,
        {
          provide: DepService,
          useValue: {
            prepareSomething: () => {
              console.log('Prepared something for you');
            },

            doSomething: (x: string) => {
              console.log(x);
              return x;
            },
          },
        },
      ],
    }).compile();

    testService = app.get<TestService>(TestService);
  });

  it('should return string', () => {
    expect(testService.returnData('Hallo')).toEqual('Hallo');
  });
});
