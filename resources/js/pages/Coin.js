import {Stats} from "../components/Stats";
import {Newsfeed} from "../components/Newsfeed";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {TrendingList} from "../components/TrendingList";
import {useAxios} from "../hooks/useAxios";
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
                    `https://api.coingecko.com/api/v3/coins/${id}`,
                    { withCredentials: false }
                );
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [id])

    if (loading) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <main className="-mt-24 pb-8 mb-auto">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="mb-7 sm:flex-auto">
                        <h1 className="text-xl font-semibold text-indigo-100">{data.name}</h1>
                        <p className="mt-2 text-sm text-gray-200">Details about this coin.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >Add to portfolio
                        </button>
                    </div>
                </div>
                {error && (
                    <div>{`There is a problem fetching the data - ${error}`}</div>
                )}
                <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                    <Newsfeed
                        key={data.id}
                        coin={data}
                    />
                    <div className="grid grid-cols-1 gap-4">
                        <Stats
                            key={data.id}
                            coin={data}
                        />
                        <TrendingList />
                    </div>
                </div>
            </div>
        </main>
    );
}
