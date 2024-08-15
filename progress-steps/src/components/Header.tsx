import React from "react";

const Header = ({ steps }) => {
    const items = ["1", "2", "3"];

    return (
        <div className="flex justify-between space-x-4">
            {items.map((item, index) => (
                <span key={index} className={`${steps >= index ? "bg-purple-700" : "bg-gray-400"} text-white w-10 h-10 rounded-full flex justify-center items-center`}>
                    {item}
                </span>
            ))}
        </div>
    );
};

export default Header;
