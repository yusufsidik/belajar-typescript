import { Seller, Manager, Person } from "../src/alias"

describe("Interface", function(){
  it("should support in typescript", function(){
    const seller: Seller = {
      id: 122,
      name: "eko",
      address: "pasundan",
      nib: "111usaha111",
      npwp: "111.111.111.111"
    }
  })

  it("should support function interface", function(){
    interface AddFunction {
      (value1: number, value2: number) : number
    }

    const Add: AddFunction = (value1, value2) => {
      return value1 + value2
    }

    const angka = Add(5,1);
  })

  it("should support extends interface", function(){
    
    const manager: Manager = {
      id: 12,
      name: "jokowi",
      division: "President",
      numberOfEmployees: 10001,
      sayHello: function(name){
        return `Hello ${name} im ${this.name}`
      }
    }

    console.info(manager.sayHello("prabowo"))
  })

  it("should support intersection types", function(){
    interface HasName {
      name: string
    }
    interface HasId {
      id: number
    }
    interface HasAddress {
      address: string
    }

    // jika ada tambahan attribute
    interface Person extends HasName, HasId, HasAddress {

    }
    // jika tidak ada tambahan attribute
    type Domain = HasId & HasName & HasAddress
  })


  it("should support assertions types", function(){
    
    const person1: any = {
      name: "joko",
      age: 5000
    }

    const person2: Person = person1 as Person


  })


})