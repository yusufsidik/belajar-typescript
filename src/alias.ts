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

export type Product = {
  id: ID
  name: string
  price: number
  category: Category,
  cust_type: CustomerType
}


