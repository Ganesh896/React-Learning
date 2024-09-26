import { useState } from "react";
import { Item } from "../Interface/Item";

interface Iprops {
    items: Item[];
    addItem: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Form = ({ items, addItem }: Iprops) => {
    const [item, setItem] = useState("");
    const [numberOfItems, setNumberOfItems] = useState(1);

    const addItemHandler = (e) => {
        e.preventDefault();
        const newItem = {
            numberOfItems,
            itemName: item,
        };

        if (item.length > 0) {
            addItem((prevItems: Item[]) => [...prevItems, newItem]);
            setItem("");
            setNumberOfItems(1);
        }
    };

    return (
        <div className="flex justify-between items-center gap-2 p-10 bg-orange-500">
            <h3 className="text-xl">What do you need for your trip?</h3>
            <form className="flex items-center gap-2" onSubmit={addItemHandler}>
                <select name="item-numbers" value={numberOfItems} onChange={(e) => setNumberOfItems(+e.target.value)} className="p-2 rounded-xl">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <input type="text" className="p-2 rounded-md" onChange={(e) => setItem(e.target.value)} value={item} placeholder="Item..." />
                <button type="submit" className="bg-blue-400 p-2 rounded-3xl w-[100px]">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default Form;
