import { all, select, takeLatest } from "redux-saga/effects";
import { IState } from "../..";
import { addProductToCart } from "./actions";

type CheckProductStockRequest = ReturnType<typeof addProductToCart>;

function* checkProductStock({ payload }: any) {
  const { product } = payload;
  const currentQuantityInCart: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  console.log(currentQuantityInCart);
}

export default all([takeLatest("ADD_PRODUCT_TO_CART", checkProductStock)]);