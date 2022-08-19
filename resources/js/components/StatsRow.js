import React from "react";
import Chart from '../img/chart.svg';

export const StatsRow = (props) => {
    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;
    const color = (Math.sign(percentage) === 1 ? '02cd97' : 'f4918f')
    const sign = (Math.sign(percentage) === 1 ? '+' : ' ')

    return (
        <tr key={props.name}  className="hover:bg-gray-600">
            <td className="whitespace-nowrap py-4 pl-6">
                <img className="h-10 w-10 rounded-full" src={'https://assets.coincap.io/assets/icons/' + props.symbol.toLowerCase() + '@2x.png'} alt="" />
            </td>
            <td className="text-sm pl-2">
                <div className="font-medium text-gray-200">{props.name}</div>
                <div className="text-gray-400">{props.symbol}</div>
            </td>
            <td>
                <img src={Chart} style={{width:'100px'}} />
            </td>
            <td className="text-sm sm:pr-4 text-right">
                <div className="font-medium text-gray-200">${parseFloat(props.price).toFixed(2)}</div>
                <div className={"text-[#" + color + "]"}>{sign}{Number(percentage).toFixed(2)}%</div>
            </td>
        </tr>
    )
}

export default StatsRow
