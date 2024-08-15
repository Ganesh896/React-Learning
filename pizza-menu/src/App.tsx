import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="max-w-[800px] mx-auto p-6 text-center">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
