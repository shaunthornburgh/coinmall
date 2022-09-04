import React from "react";
import {currencyFormat} from "../utils";

export const Stats = (props) => {
    return (
        <section aria-labelledby="section-2-title">
            <div className="rounded-lg bg-gray-700 overflow-hidden shadow">
                <div className="flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-600">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" colSpan="4" className="col-span-2 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white bg-gray-700 sm:pl-6">
                                                Stats
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-600">
                                        <tr>
                                            <td className="text-sm pl-4 py-4">
                                                <div className="font-medium text-gray-200">Price Change (24h)</div>
                                            </td>
                                            <td className="text-right pr-4">
                                                <div className={`${props.coin.market_data.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>{Number(props.coin.market_data.price_change_percentage_24h).toFixed(2)}%</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-sm pl-4 py-4">
                                                <div className="font-medium text-gray-200">Price Change (7d)</div>
                                            </td>
                                            <td className="text-right pr-4">
                                                <div className={`${props.coin.market_data.price_change_percentage_7d < 0 ? 'text-red-400' : 'text-green-400'}`}>{Number(props.coin.market_data.price_change_percentage_7d).toFixed(2)}%</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-sm pl-4 py-4">
                                                <div className="font-medium text-gray-200">Market Cap</div>
                                            </td>
                                            <td className="text-right pr-4">
                                                <div className="font-medium text-gray-200">{currencyFormat(props.coin.market_data.market_cap.usd)}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-sm pl-4 py-4">
                                                <div className="font-medium text-gray-200">ATH</div>
                                            </td>
                                            <td className="text-right pr-4">
                                                <div className="font-medium text-gray-200">{currencyFormat(props.coin.market_data.ath.usd)}</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
