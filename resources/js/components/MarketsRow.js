import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {currencyFormat} from "../utils";

export const MarketsRow = (props) => {
    const sign = (Math.sign(props.coin.price_change_percentage_24h) === 1 ? '+' : ' ')

    return (
        <tr key={props.coin.id} className="hover:bg-gray-600">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={props.coin.image} alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-200">{props.coin.name}</div>
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-500">{props.coin.symbol}</div>
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">
                <div className="text-gray-200">{currencyFormat(props.coin.current_price)}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">
                <div className={`${props.coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>{sign}{parseFloat(props.coin.price_change_percentage_24h).toFixed(2)}%</div>
            </td>

            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">
                <div className="text-gray-200">{currencyFormat(props.coin.market_cap)}</div>
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <Link className="text-white hover:text-white" to={"/coin/" + props.coin.id + "/"}>Details</Link>
            </td>
        </tr>
    )
}
