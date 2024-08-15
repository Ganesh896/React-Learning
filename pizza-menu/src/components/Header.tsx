import React from "react";
export const Header = () => {
    return (
        <div className="text-center">
            <h1 className="text-yellow-400 text-5xl font-light uppercase">Fast React Pizza Co.</h1>
            <div className="my-8 flex justify-center">
                <h3 className="text-2xl border-t-2 border-b-2 py-2 w-fit border-black uppercase font-semibold">Our Menu</h3>
            </div>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
        </div>
    );
};
