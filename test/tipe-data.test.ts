describe('Data type', function(): void {
  it('should must declare', function(): void {
    let name: string = "eko"
    let balance: number = 100
    let isVip: boolean = true

    name = "100"
    balance = 100
    isVip = false

    const names: ReadonlyArray<string> = ["yusuf", "sidik"]
    const values: number[] = [12,23,32]

    console.info(names[1])
    console.info(values[0])

  })

  // tuple
  it("should support tuple", function(){
    const person: readonly [string, string, number] = ["yusuf", "sidik", 26]

    console.info(person[1])
  })

  // union type
  it("support typescript", function(){
    let sample: number | string | boolean | [] = "eko"
  })
})