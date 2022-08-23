import React from "react";

export const Timeline = (props) => {
    return (
        <div className="flex flex-row justify-evenly text-white font-bold h-9">
            <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1H </a>
            <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 24H </a>
            <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1W </a>
            <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1M </a>
            <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1Y </a>
            <a href="#" className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> All </a>
        </div>
    )
}
