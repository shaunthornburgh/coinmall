import React from "react";
import {LineGraph} from "./LineGraph";

export const Newsfeed = () => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">Section title</h2>
                <div className="rounded-lg bg-gray-700 overflow-hidden shadow">
                    <div>
                        <div className="p-6">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <h1 className="text-white font-bold text-xl">Bitcoin (BTC)</h1>
                                    <h1 className="text-white font-bold text-xl">$24562.88</h1>
                                    <p className="text-gray-400 text-xs">0.01342661 BTC -0.5%</p>
                                </div>
                                <div className="flex flex-row justify-evenly text-white font-bold h-9">
                                    <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1H </a>
                                    <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 24H </a>
                                    <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1W </a>
                                    <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1M </a>
                                    <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1Y </a>
                                    <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> All </a>
                                </div>
                            </div>
                        </div>
                        <LineGraph />
                    </div>
                </div>
            </section>
        </div>
    )
}
