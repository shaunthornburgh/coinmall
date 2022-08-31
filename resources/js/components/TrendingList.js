import React, {useEffect, useState} from "react";
import axios from "axios";
import {TrendingRow} from "./TrendingRow";

export const TrendingList = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/search/trending`,
                    { withCredentials: false }
                );
                setData(response.data.coins);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-4">
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
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
                                                    Trending
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-600">
                                        {data &&
                                            data.map(({item}) => (
                                                <TrendingRow
                                                    key={item.id}
                                                    id={item.id}
                                                    name={item.name}
                                                    symbol={item.symbol}
                                                    image={item.small}
                                                    price={item.price_btc}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
