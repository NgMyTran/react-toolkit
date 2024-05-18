import React, { useState } from "react";
import CartDetail from "./CartDetail";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./store/slices/cart.slice";

export default function App() {
  // const [countCart, setCountCart] = useState(0);

  //useSelector: Truy cap vao store de lay du lieu
  const cartStore = useSelector((store) => {
    return store.cartStore;
  });
  // console.log(cartStore, "cartStore");

  //disptach gọi reducer
  const dispatch = useDispatch();

  return (
    <>
      <div>
        Cart: <CartDetail />
      </div>

      <div>Product No.1</div>
      <button
        onClick={() => {
          dispatch(
            cartAction.addToCart({
              name: "product 1",
              quality: 1,
            })
          );
        }}
      >
        BUY
        <p>{cartStore.items.length}</p>
      </button>
    </>
  );
}
