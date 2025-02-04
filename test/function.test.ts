describe("Funtion", function(){
  it("should support function typescript", function(){

    // jika mengembalikana nilai, maka tentukan tipe untuk return value, jika tidak maka isi dengan void
    function sayHello(name: string) : string {
      return `Hello ${name}`
    }

  })


  it("parameter", function(){

    function sayHello(name: string = "Guest") : string {
      return `Hello ${name}`
    }

    function sum(...values: number[]) : number {
      let total: number = 0
      for(const value of values){
        total += value
      }
      return total
    }

  })
})