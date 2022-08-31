import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {PortfolioRow} from "./PortfolioRow";
import AuthContext from "../context/authContext";
import {useAxios} from "../hooks/useAxios";

export const PortfolioList = () => {
    const BASE_URL = 'https://api.coincap.io/v2';
    const {authData} = useContext(AuthContext);
    const [coinData, setCoinData] = useState([]);

    const getCoinData = (coin) => {
        return axios
            .get(
                `https://api.coingecko.com/api/v3/coins/${coin}`,
                { withCredentials: false }
            )
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(()=>{
        const coinList = [];
        if (authData.user) {
            authData.user.data.coins.map(value => {
                coinList.push(value.name)
            });
        }
        let tmpCoinData = [];
        let promises = [];

        coinList.map((coin) => {
            promises.push(
                getCoinData(coin)
                    .then((res) => {
                        tmpCoinData.push({
                            ...res.data
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
                                                <th scope="col" colSpan="4" className="col-span-2 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white bg-gray-700 sm:pl-6">
                                                    My Portfolio
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-600">
                                            {coinData.map((coin) => (
                                                <PortfolioRow
                                                    key={coin.id}
                                                    coin={coin}
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
