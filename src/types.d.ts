export interface IDish {
  title: string,
  price: number,
  dishImg: string,
}

export interface IApiDish extends IDish{
  id: string
}