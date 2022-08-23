import {Stats} from "../Stats";
import {Newsfeed} from "../Newsfeed";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


export const Coin = () => {
    let { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://api.coincap.io/v2/assets/${id}`,
                    { withCredentials: false }
                );
                console.log(response.data.data)
                setData(response.data.data);
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
        <main className="-mt-24 pb-8 mb-auto">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="mb-7 sm:flex-auto">
                        {!loading && (
                            <h1 className="text-xl font-semibold text-indigo-100">{data.name}</h1>
                        )}
                        <p className="mt-2 text-sm text-gray-200">Details about this coin.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >Add to portfolio
                        </button>
                    </div>
                </div>
                {loading && <div>A moment please...</div>}
                {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                    {!loading && (
                        <Newsfeed
                            key={data.id}
                            name={data.name}
                            symbol={data.symbol}
                            price={data.priceUsd}
                            change={data.changePercent24Hr}
                            marketCap={data.marketCapUsd}
                        />
                    )}
                    {!loading && (
                        <Stats
                            key={data.id}
                            name={data.name}
                            symbol={data.symbol}
                            price={data.priceUsd}
                            change={data.changePercent24Hr}
                            marketCap={data.marketCapUsd}
                        />
                    )}
                </div>
            </div>
        </main>
    );
}
