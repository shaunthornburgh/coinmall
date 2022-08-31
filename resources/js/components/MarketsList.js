import {useAxios} from "../hooks/useAxios"
import {MarketsRow} from "./MarketsRow";
import React from "react";

export const MarketsList = () => {
    const { response, loading, error } = useAxios('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

    return (
        <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        {loading && <div>A moment please...</div>}
                        {error && (
                            <div>{`There is a problem fetching the data - ${error}`}</div>
                        )}
                        <table className="min-w-full divide-y divide-gray-600 bg-gray-700">
                            <thead className="bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Name
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white">Price
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white">24Hr Change
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-white">Market Cap
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-600">
                                {response &&
                                    response.map(coin =>
                                        <MarketsRow
                                            key={coin.id}
                                            coin={coin}
                                        />
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
