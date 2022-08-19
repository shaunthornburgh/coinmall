import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between bg-gray-800">
            <Header />
            { children }
            <Footer />
        </div>
    );
};
