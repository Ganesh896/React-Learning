import React, { useState } from "react";
import { Item as ItemInterface } from "../Interface/Item";

interface IProps {
    item: ItemInterface;
}

const Item = ({ item }: IProps) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const isCompletedHandlr = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false); 
        }
    };
    return (
        <div className="text-white w-fit flex items-center gap-4 h-full p-3 rounded-sm">
            <input type="checkbox" onChange={(e) => isCompletedHandlr(e)} />
            <h4 className={`text-xl ${isCompleted && "line-through"}`}>
                {item.numberOfItems} {item.itemName}
            </h4>
            <button className="text-2xl text-red-600">
                <i className="bx bx-x"></i>
            </button>
        </div>
    );
};

export default Item;
