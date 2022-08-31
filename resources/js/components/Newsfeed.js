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
                                    <h1 className="text-white font-bold text-xl">{props.coin.name} ({props.coin.symbol.toUpperCase()})</h1>
                                    <h1 className="text-white font-bold text-xl">${parseFloat(props.coin.market_data.current_price.usd).toFixed(2)}</h1>
                                    <p className="text-gray-400 text-xs">{props.coin.market_data.price_change_percentage_24h }%</p>
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
