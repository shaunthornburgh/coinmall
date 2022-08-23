import React from "react";
import {LineGraph} from "./LineGraph";
import {Timeline} from "./Timeline";

export const Newsfeed = (props) => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-1-title">
                <div className="rounded-lg bg-gray-700 overflow-hidden shadow">
                    <div>
                        <div className="p-6">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <h1 className="text-white font-bold text-xl">{props.name} ({props.symbol})</h1>
                                    <h1 className="text-white font-bold text-xl">${parseFloat(props.price).toFixed(2)}</h1>
                                    <p className="text-gray-400 text-xs">0.01342661 BTC -0.5%</p>
                                </div>
                                <Timeline />
                            </div>
                        </div>
                        <LineGraph />
                    </div>
                </div>
            </section>
        </div>
    )
}
