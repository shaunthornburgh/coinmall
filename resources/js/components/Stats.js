import React, {useState, useEffect} from "react";
import axios from "axios";
import {StatsRow} from "./StatsRow";

const BASE_URL = 'https://api.coincap.io/v2';

export const Stats = () => {
    const [coinData, setCoinData] = useState([]);
    const [favourites, setFavourites] = useState([]);
    
    const getCoinData = (coin) => {
        return axios
            .get(`${BASE_URL}/assets/${coin}`, { withCredentials: false })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(()=>{
        let tmpCoinData = [];
        const coinList = ["bitcoin", "ethereum", "tether", "usd-coin", "binance-coin", "cardano", "binance-usd", "xrp", "solana", "dogecoin"];
        let promises = [];

        coinList.map((coin) => {
            promises.push(
                getCoinData(coin)
                    .then((res) => {
                        tmpCoinData.push({
                            ...res.data.data
                        });
                    })
            )
        });

        Promise.all(promises).then(()=>{
            setCoinData(tmpCoinData);
        })
    }, []);

    return (
        <div className="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">

                <div className="rounded-lg bg-gray-700 overflow-hidden shadow">
                    <div className="flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-600">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white bg-gray-700 sm:pl-6">
                                                Coins
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-600">
                                            {coinData.map((coin) => (
                                                <StatsRow
                                                    key={coin.name}
                                                    name={coin.name}
                                                    symbol={coin.symbol}
                                                    price={coin.priceUsd}
                                                    openPrice={coin.vwap24Hr}
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
