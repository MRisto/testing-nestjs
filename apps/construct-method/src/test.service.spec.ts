import { Test, TestingModule } from '@nestjs/testing';
import { TestService } from './test.service';
import { DepService } from './dep.service';

describe(TestService.name, () => {
  let testService: TestService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        TestService,
        {
          provide: DepService,
          useValue: {
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
