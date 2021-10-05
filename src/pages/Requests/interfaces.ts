export interface ILoadedRequest {
  id: string;
  address: string;
  city: string;
  neighborhood: string;
  postal_code: string;
  state: string;
}

export interface IRequest extends Omit<ILoadedRequest, 'postal_code'> {
  postalCode: string;
}
