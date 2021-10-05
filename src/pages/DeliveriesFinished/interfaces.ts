interface IProduct {
  name: string;
}

export interface IDelivery {
  id: string;
  startDate: Date;
  endDate: Date;
  product: IProduct;
}

export interface ILoadedDelivery {
  id: string;
  start_date: Date;
  end_date: Date;
  product: IProduct;
}
