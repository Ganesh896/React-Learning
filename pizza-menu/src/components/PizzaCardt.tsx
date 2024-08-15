import React from "react";

const PizzaCard = ({ item }) => {
    return (
        <li>
            <article className="flex items-center gap-6 flex-col md:flex-row">
                <div className="max-w-[130px] min-w-[100px]">
                    <img src={item.photoName} alt="img" />
                </div>
                <div className="text-center md:text-left">
                    <h4 className="text-xl">{item.name}</h4>
                    <p className="text-m italic text-gray-500 font-light my-1 md:my-3">{item.ingredients}</p>
                    <h5 className="text-xl">{item.soldOut ? "SOLD OUT" : "$" + item.price}</h5>
                </div>
            </article>
        </li>
    );
};

export default PizzaCard;
