import React from "react";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { useNavigate } from 'react-router-dom';
import {currencyFormat} from "../utils";

export const PortfolioRow = (props) => {
    const navigate = useNavigate();

    function handleRowClick() {
        navigate('/portfolio/' + props.coin.id);
    }

    return (
        <tr className="hover:bg-gray-600 cursor-pointer" key={props.id} onClick={handleRowClick}>
            <td className="whitespace-nowrap py-4 pl-6">
                <img className="h-10 w-10 rounded-full" src={props.coin.image.small} alt="" />
            </td>
            <td className="text-sm pl-2">
                <div className="font-medium text-gray-200">{props.coin.name}</div>
                <div className="text-gray-400">{props.symbol}</div>
            </td>
            <td>
                {props.coin.market_data.price_change_24h < 0 ? <TrendingDown /> : <TrendingUp />}
            </td>
            <td className="text-sm sm:pr-4 text-right">
                <div className="font-medium text-gray-200">{currencyFormat(props.coin.market_data.current_price.usd)}</div>
                <div className={`${props.coin.market_data.price_change_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>{currencyFormat(props.coin.market_data.price_change_24h)}</div>
            </td>
        </tr>
    )
}
