import {MarketsList} from "../components/MarketsList";
import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export const Markets = () => {

    return (
        <main className="-mt-24 mb-auto">
            <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-indigo-100">Markets</h1>
                        <p className="mt-2 text-sm text-gray-200">A list of all the cryptocurrencies currently available.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link
                            to={"/portfolio"}
                            type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >View my portfolio
                        </Link>
                    </div>
                </div>
                <MarketsList />
            </div>
        </main>
    );
}
