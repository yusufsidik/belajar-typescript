import { Category, Product, CustomerType } from "../src/alias";

describe("Type Alias", function(){
  it("should support in typescript", function(){
    const category : Category = {
      id: "1",
      name: "Handphone"
    }


    
    const product: Product = {
      id: 1,
      name: "Samsung FE 24",
      price: 8000000,
      category: category,
      cust_type: CustomerType.PLATINUM
    }

    console.info(product)
  })
})