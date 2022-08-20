import {Newsfeed} from "../Newsfeed";
import {Stats} from "../Stats";
import React, {useEffect, useState, useContext} from "react";
import AuthContext from "../../context/authContext";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const {authData} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authData.signedIn) {
            navigate('/login');
        }
    }, []);

    return (
        <main className="-mt-24 pb-8 mb-auto">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                    <Newsfeed />
                    <Stats />
                </div>
            </div>
        </main>
    );
}
