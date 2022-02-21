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