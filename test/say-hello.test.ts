import { sayHello } from "../src/say-hello";

describe('sayhello', function(): void{
  it("should return hello eko", function(): void {
    expect(sayHello("eko")).toBe('Hello eko')
  })
})