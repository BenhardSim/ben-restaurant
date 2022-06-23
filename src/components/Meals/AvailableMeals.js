import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pecel Lele",
    description: "Lele segar dengan sambal pedas",
    price: 22.99
  },
  {
    id: "m2",
    name: "Bebek goreng",
    description: "bebek segar dengan bumbu hitam khs madura",
    price: 16.5
  },
  {
    id: "m3",
    name: "Nasi gorang ",
    description: "Menggunakan nasi segar, dan di masak denga bumbu khas",
    price: 12.99
  },
  {
    id: "m4",
    name: "Mie Ayam",
    description: "Enak dan sehat",
    price: 18.99
  },
  {
    id: "m5",
    name: "Belut Gorang",
    description: "Belut di masak keting dan segar",
    price: 18.99
  },
  {
    id: "m6",
    name: "Kepiting saus padang",
    description: "Kepiting fresh dengan saus padang yang khas",
    price: 18.99
  },
  {
    id: "m7",
    name: "Ikan Goreng Nila",
    description: "Nila fresh dengan saus padang yang khas",
    price: 18.99
  }
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        price={meal.price}
        name={meal.name}
        description={meal.description}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
