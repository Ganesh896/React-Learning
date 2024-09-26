import { useState } from "react";
import { Form, ItemList, Logo, Status } from "./components";

function App() {
    const [items, setItems] = useState([
        {
            numberOfItems: 2,
            itemName: "Password",
        },
    ]);

    return (
        <div className="max-w-[900px] mx-auto p-8">
            <Logo />
            <Form items={items} addItem={setItems} />
            <ItemList items={items} />
            <Status />
        </div>
    );
}

export default App;
