import {Stats} from "../components/Stats";
import {Newsfeed} from "../components/Newsfeed";
import React, {useContext} from "react";
import {TrendingList} from "../components/TrendingList";
import {useAxios} from "../hooks/useAxios";
import AuthContext from "../context/authContext";
import {useNavigate, useParams} from "react-router-dom";

export const Coin = () => {
    const {authData, setAuthData} = useContext(AuthContext);
    let { id, timeFrame } = useParams();
    const { response, loading , error } = useAxios(`/coins/${id}`, [id, timeFrame]);
    const appUrl = process.env.MIX_APP_URL;
    const navigate = useNavigate();

    const handleButtonClick = () => {
        axios
            .post(appUrl + '/api/coins',
                {
                    user_id: authData.user.data.id,
                    coin: id
                },
                {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(() => {
                navigate('/portfolio')
            })
            .catch(error =>
                console.log(error.toJSON())
            )
    }

    return (
        <main className="-mt-24 pb-8 mb-auto">
            {loading && <div>A moment please...</div>}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="mb-7 sm:flex-auto">
                        {response && <h1 className="text-xl font-semibold text-indigo-100">{response.name}</h1>}
                        <p className="mt-2 text-sm text-gray-200">Details about this coin.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            onClick={handleButtonClick}
                        >Add to portfolio
                        </button>
                    </div>
                </div>
                {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
                <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                    {response && <Newsfeed
                        key={response.id}
                        coin={response}
                        page='coin'
                    />}
                    <div className="grid grid-cols-1 gap-4">
                        {response && <Stats key={response.id} coin={response}/>}
                        <TrendingList />
                    </div>
                </div>
            </div>
        </main>
    );
}
