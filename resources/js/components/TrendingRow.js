import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Chart from "../img/chart.svg";

export const TrendingRow = (props) => {
    return (
        <tr key={props.name} className="hover:bg-gray-600">
            <td className="whitespace-nowrap py-4 pl-4">
                <img className="h-10 w-10 rounded-full" src={props.image} alt="" />
            </td>
            <td className="text-sm pl-2">
                <div className="font-medium text-gray-200">{props.name}</div>
                <div className="text-gray-400">{props.symbol}</div>
            </td>
            <td>
                <img src={Chart} style={{width:'100px'}} />
            </td>
            <td className="text-sm sm:pl-2 pr-4 text-right">
                <Link className="text-white hover:text-white" to={"/coin/" + props.id + "/"}>Details</Link>
            </td>
        </tr>
    )
}
