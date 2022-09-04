import {Newsfeed} from "../components/Newsfeed";
import {PortfolioList} from "../components/PortfolioList";
import React, {useEffect, useState, useContext} from "react";
import AuthContext from "../context/authContext";
import {useNavigate, useParams} from "react-router-dom";
import {useAxios} from "../hooks/useAxios";

export const Portfolio = () => {
    const {authData} = useContext(AuthContext);
    const navigate = useNavigate();
    let coin = null;
    let { id, timeFrame } = useParams();
    let days = null;

    useEffect(() => {
        if (!authData.signedIn) {
            navigate('/login');
        }
    }, []);

    if (authData.signedIn) {
        if (id) {
            days = id
        } else {
            days = authData.user.data.coins[0].name
        }
        const { response, loading , error } = useAxios(`/coins/${days}`, [id]);
        coin = response
    }

    if (authData.signedIn) {
        return (
            <main className="-mt-24 pb-8 mb-auto">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="mb-7 sm:flex-auto">
                            <h1 className="text-xl font-semibold text-indigo-100">Portfolio</h1>
                            <p className="mt-2 text-sm text-gray-200">Welcome to your portfolio.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                        {authData.signedIn && authData.user && coin && (
                            <Newsfeed
                                key={coin.id}
                                coin={coin}
                                page='portfolio'
                            />
                        )}
                        <PortfolioList/>
                    </div>
                </div>
            </main>
        );
    }
}
