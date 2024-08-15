import React from "react";

const Footer = ({ clickNextHandler, clickPreviousHandler }) => {
    return (
        <div className="flex gap-8 justify-center">
            <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={clickPreviousHandler}>
                Previous
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={clickNextHandler}>
                Next
            </button>
        </div>
    );
};

export default Footer;
