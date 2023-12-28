export interface IDish {
  title: string,
  price: string,
  dishImg: string,
}

export interface IApiDish extends IDish{
  id: string
}

export interface IDishes{
  dishes: IApiDish[]
}