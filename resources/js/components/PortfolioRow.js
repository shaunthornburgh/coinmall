import React from "react";
import Chart from '../img/chart.svg';

export const PortfolioRow = (props) => {
    const price_change_percentage_24h = props.coin.market_data.price_change_percentage_24h;
    const color = (Math.sign(price_change_percentage_24h) === 1 ? '02cd97' : 'f4918f')
    const sign = (Math.sign(price_change_percentage_24h) === 1 ? '+' : ' ')

    return (
        <tr className="hover:bg-gray-600">
            <td className="whitespace-nowrap py-4 pl-6">
                <img className="h-10 w-10 rounded-full" src={props.coin.image.small} alt="" />
            </td>
            <td className="text-sm pl-2">
                <div className="font-medium text-gray-200">{props.coin.name}</div>
                <div className="text-gray-400">{props.symbol}</div>
            </td>
            <td>
                <img src={Chart} style={{width:'80px'}} />
            </td>
            <td className="text-sm sm:pr-4 text-right">
                <div className="font-medium text-gray-200">${parseFloat(props.coin.market_data.current_price.usd).toFixed(2)}</div>
                <div className={"text-[#" + color + "]"}>{sign}{parseFloat(price_change_percentage_24h).toFixed(2)}%%</div>
            </td>
        </tr>
    )
}
