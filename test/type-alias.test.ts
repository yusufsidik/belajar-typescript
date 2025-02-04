import { Category, Product, CustomerType, Seller } from "../src/alias";

describe("Type Alias", function(){
  it("should support in typescript", function(){
    const category : Category = {
      id: "1",
      name: "Handphone"
    }
    
    const customer: Product = {
      id: 1,
      name: "Samsung FE 24",
      price: 8000000,
      category: category,
      cust_type: CustomerType.PLATINUM
    }

    const seller: Seller = {
      id: 122,
      name: "eko",
      address: "pasundan",
      nib: "111usaha111",
      npwp: "111.111.111.111"
    }


    console.info(seller)
  })
})