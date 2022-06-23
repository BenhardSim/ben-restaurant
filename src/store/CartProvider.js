import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  // totalAmount adalah jumlah harga total
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // console.log(action.item);
    const updatedTotalPrice =
      state.totalAmount + action.item.price * action.item.amount;
    // mengembalikan indeks dari return yang terpenuhi
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    // mengembalikan object
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      // array of item
      items: updatedItems,
      totalAmount: updatedTotalPrice
    };
  }
  if (action.type === "REMOVE") {
    // const removedItems = state.items.filter(item=>action.item.id !== item.id)
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => action.id !== item.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAct] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAct({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAct({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
