import React, { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const data: string[] = ["fasdfasdf", "ljljflaksdjfla", "ldjflasdfahs"];
export const Card = () => {
    const [steps, setSteps] = useState(0);
    function clickNextHandler() {
        if (steps < data.length - 1) {
            setSteps(steps + 1);
        }
    }

    function clickPreviousHandler() {
        if (steps > 0) {
            setSteps(steps - 1);
        }
    }

    // const clickPreviousHandler = () => {
    //     setSteps(steps - 1);
    // };

    return (
        <div className="bg-gray-200 rounded-md w-full max-w-[400px] mx-auto p-6">
            <Header steps={steps} />
            <Content data={data[steps]} />
            <Footer clickNextHandler={clickNextHandler} clickPreviousHandler={clickPreviousHandler} />
        </div>
    );
};
