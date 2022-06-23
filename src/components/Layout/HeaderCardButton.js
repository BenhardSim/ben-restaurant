import React, { useContext, useEffect, useState } from "react";
import CardIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import Contexts from "../../store/cart-context";

const HeaderCardButton = (props) => {
  const [btnHigh, setBtnHigh] = useState(false);
  const ctx = useContext(Contexts);
  const { items } = ctx;
  console.log(ctx.items);
  const numOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHigh ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHigh(true);
    const timer = setTimeout(() => {
      setBtnHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItem}</span>
    </button>
  );
};

export default HeaderCardButton;
