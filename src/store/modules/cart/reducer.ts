import { Reducer } from "redux";
import produce from "immer";
import { ActionTypes, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  outOfStockProductIds: [],
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  // Immer tira a verbosidade que seria necessária para respeitar
  // a imutabilidade do estado
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productIndexInCart = draft.items.findIndex(
          (item) => item.product.id === product.id
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

      case ActionTypes.addProductToCartFailure: {
        draft.outOfStockProductIds.push(action.payload.productId);
        break;
      }

      default: {
        return draft;
      }
    }
  });
};
