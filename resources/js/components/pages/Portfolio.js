import {Newsfeed} from "../Newsfeed";
import {PortfolioList} from "../PortfolioList";
import React, {useEffect, useState, useContext} from "react";
import AuthContext from "../../context/authContext";
import {useNavigate} from "react-router-dom";

export const Portfolio = () => {
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
                <div className="sm:flex sm:items-center">
                    <div className="mb-7 sm:flex-auto">
                        <h1 className="text-xl font-semibold text-indigo-100">Portfolio</h1>
                        <p className="mt-2 text-sm text-gray-200">A list of all the cryptocurrencies currently available.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >Add to portfolio
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                    <Newsfeed />
                    <PortfolioList />
                </div>
            </div>
        </main>
    );
}
