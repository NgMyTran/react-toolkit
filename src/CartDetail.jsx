import React from "react";
import { useSelector } from "react-redux";
export default function CartDetail() {
  // const countCart = 5;
  const cartStore = useSelector((store) => {
    return store.cartStore;
  });
  return <span>So luong SP trong Cart: {cartStore.items.length}</span>;
}
