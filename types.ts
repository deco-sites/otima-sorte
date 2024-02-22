export interface UserOrder {
  "@type": "UserOrder";
  id: string;
  name: string;
  createdAt: string;
  totalPrice: string;
  status: string;
  products: string[];
}

export type UserOrders = UserOrder[];
