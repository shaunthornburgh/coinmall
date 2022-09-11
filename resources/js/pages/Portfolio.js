import {Newsfeed} from "../components/Newsfeed";
import {PortfolioList} from "../components/PortfolioList";
import React, {useEffect, useState, useContext} from "react";
import AuthContext from "../context/authContext";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export const Portfolio = () => {
    const appUrl = process.env.MIX_APP_URL;
    const {authData} = useContext(AuthContext);
    const navigate = useNavigate();
    let { id } = useParams();
    let [displayCoin, setDisplayCoin] = useState(null);
    let [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        if (!authData.signedIn) {
            navigate('/login');
        }

        axios.get(`${appUrl}/api/coins`, )
            .then(response => {
                setPortfolio(response.data.data);
                return response.data.data;
            })
            .then(portfolio => {
                let param = id ? id : portfolio[0];
                return axios.get(`https://api.coingecko.com/api/v3/coins/${param}`, { withCredentials: false })
            })
            .then(response => {
                setDisplayCoin(response.data);
            })
    }, [id]);

    return (
        <main className="-mt-24 pb-8 mb-auto">
            {portfolio.length === 0 && <div>A moment please...</div>}
            {portfolio.length === 0 && <div>You have no coins in your portfolio...</div>}
            {displayCoin && (
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="mb-7 sm:flex-auto">
                            <h1 className="text-xl font-semibold text-indigo-100">Portfolio</h1>
                            <p className="mt-2 text-sm text-gray-200">Welcome to your portfolio.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                        <Newsfeed
                            key={displayCoin.id}
                            coin={displayCoin}
                            page='portfolio'
                        />
                        {portfolio.length !== 0 && (
                            <PortfolioList
                                portfolio={portfolio}
                            />
                        )}
                    </div>
                </div>
            )}
        </main>
    );

}
