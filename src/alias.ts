type ID = string | number

export type Category = {
  id: ID
  name: string
  description?: string
}

export enum CustomerType {
  REGULER,
  GOLD,
  PLATINUM
}

export interface Seller {
  id: number
  name: string
  address?:  string
  readonly nib: string
  readonly npwp: string
}

export interface Person {
  name: string
  age: number
}


export interface Employee {
  id: number
  name: string
  division: string
  sayHello(name: string): string
}

export interface Manager extends Employee {
  numberOfEmployees: number
}

export type Product = {
  id: ID
  name: string
  price: number
  category: Category,
  cust_type: CustomerType
}



