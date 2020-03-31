import React, { useReducer } from 'react';

interface Cart {
  products: string[],
  shipping_price?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppContext: React.FC = () => {
  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch(action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'Novo produto']
          }
        default:
          return state;
    }
  },
  {
    products: ['macbook'],
    shipping_price: 0,
  }
  )

  return (
    <div>

    </div>
  );
}

export default AppContext;