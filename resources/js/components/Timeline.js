import React from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";

export const Timeline = (props) => {
    return (
        <div className="flex flex-row justify-evenly text-white font-bold h-9">
            <Link to={`/${props.page}/${props.coin}/1`} className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 24H </Link>
            <Link to={`/${props.page}/${props.coin}/7`} className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1W </Link>
            <Link to={`/${props.page}/${props.coin}/30`} className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1M </Link>
            <Link to={`/${props.page}/${props.coin}/90`} className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 3M </Link>
            <Link to={`/${props.page}/${props.coin}/365`} className="text-indigo-100 text-sm rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"> 1Y </Link>
        </div>
    )
}
