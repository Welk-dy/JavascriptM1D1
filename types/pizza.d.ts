export interface Pizza {
  name: string;
  price: number;
}

export interface Menu {
  pizzas: Pizza[];
}

export interface CartItem {
  pizza: Pizza;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export interface Order {
  cart: Cart;
  total: number;
}