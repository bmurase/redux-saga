import { Reducer } from "redux";
import produce from 'immer';
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: []
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  // Immer tira a verbosidade que seria necessária para respeitar 
  // a imutabilidade do estado
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;

        const productIndexInCart = draft.items.findIndex(
          item => item.product.id === product.id
        );

        if (productIndexInCart >= 0) {
          draft.items[productIndexInCart].quantity++;
          break;
        }

        draft.items.push({
          product,
          quantity: 1,
        });

        break;
      }

      default: {
        return draft;
      }
    }
  });
}