import Item from "./Item";
import { Item as ItemIterface } from "../Interface/Item";

interface IProps {
    items: ItemIterface[];
}

const ItemList = ({ items }: IProps) => {
    return (
        <div className="bg-orange-900 min-h-[300px] p-10 flex gap-4 flex-wrap">
            {items.map((item, index) => (
                <Item item={item} key={index} />
            ))}
        </div>
    );
};

export default ItemList;
