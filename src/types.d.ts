export interface IDish {
  title: string;
  price: string;
  dishImg: string;
}

export interface IApiDish extends IDish {
  id: string;
}

export interface IOrder {
  [key: string]: number;
}

export interface IOrderInModal {
  count: number;
  title: string;
  price: string;
  id: string;
}

export interface IApiOrders extends IOrderInModal {
  total: number;
}
