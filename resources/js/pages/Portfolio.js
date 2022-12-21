import {Newsfeed} from "../components/Newsfeed";
import {PortfolioList} from "../components/PortfolioList";
import React, {useEffect, useState, useContext} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useAuth} from "../hooks/useAuth";

export const Portfolio = () => {
    const {authData} = useAuth();
    const navigate = useNavigate();
    let {id} = useParams();
    let [displayCoin, setDisplayCoin] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (!authData.signedIn && authData.didFinishValidatingSignIn) {
            navigate('/login');
        }

        if (authData && authData.portfolio && authData.portfolio.length > 0) {
            let param = id ? id : authData.portfolio[0];

            if (param) {
                axios
                    .get(`https://api.coingecko.com/api/v3/coins/${param}`, {withCredentials: false})
                    .then(response => {
                        console.log(response.data);
                        setDisplayCoin(response.data);
                        setLoading(false);
                    })

                setDisplayCoin(authData.portfolio[0]);
            }
        }
    }, [id]);

    return (
        <main className="-mt-24 pb-8 mb-auto">
            {authData.portfolio && <div>A moment please...</div>}
            {!authData.portfolio && <div>You have no coins in your portfolio...</div>}
            {displayCoin && (
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="sm:flex sm:items-center">
                        <div className="mb-7 sm:flex-auto">
                            <h1 className="text-xl font-semibold text-indigo-100">Portfolio</h1>
                            <p className="mt-2 text-sm text-gray-200">Welcome to your portfolio.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                        {!isLoading && (
                            <Newsfeed
                                key={displayCoin.id}
                                coin={displayCoin}
                                page='portfolio'
                            />
                        )}
                        {authData.portfolio.length !== 0 && (
                            <PortfolioList
                                portfolio={authData.portfolio}
                            />
                        )}
                    </div>
                </div>
            )}
        </main>
    );

}
