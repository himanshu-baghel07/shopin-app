export interface IProduct{
    id:number,
    title:string,
    price:number,
    category:string,
    rating:number,
    thumbnail:string
}

export interface ProductsResponse {
  products: IProduct[]
  total: number
  skip: number
  limit: number
}