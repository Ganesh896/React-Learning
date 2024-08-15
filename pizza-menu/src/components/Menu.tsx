import React from "react";
import { pizzaData } from "../data/data";
import PizzaCard from "./PizzaCardt";

const Menu = () => {
    // console.log(pizzaData);
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
            {pizzaData.map((item, index) => (
                <PizzaCard key={index} item={item} />
            ))}
        </ul>
    );
};

export default Menu;
