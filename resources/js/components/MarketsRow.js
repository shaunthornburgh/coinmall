import React from "react";

export const MarketsRow = (props) => {
    return (
        <tr key={props.id} className="hover:bg-gray-600">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={'https://assets.coincap.io/assets/icons/' + props.symbol.toLowerCase() + '@2x.png'} alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-200">{props.name}</div>
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-500">{props.symbol}</div>
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">
                <div className="text-gray-200">${parseFloat(props.price).toFixed(2)}</div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">
                <div className="text-gray-200">{parseFloat(props.change).toFixed(2)}%</div>
            </td>

            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">
                <div className="text-gray-200">${Math.abs(Number(props.marketCap) / 1.0e+6).toFixed(2)}M</div>
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <a href="#" className="text-white hover:text-white">Details</a>
            </td>
        </tr>
    )
}
