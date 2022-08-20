import React, {useEffect} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useAuth} from "../hooks/useAuth";

export const Layout = ({ children }) => {
    const { loginUserOnStartup } = useAuth();

    useEffect(() => {
        loginUserOnStartup();
    }, []);

    return (
        <div className="flex flex-col h-screen justify-between bg-gray-800">
            <Header />
            { children }
            <Footer />
        </div>
    );
};
