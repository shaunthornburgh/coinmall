import {Newsfeed} from "../Newsfeed";
import {Stats} from "../Stats";
import React from "react";

export const Home = () => {
    return (
        <main className="-mt-24 pb-8 mb-auto">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                    <Newsfeed />
                    <Stats />
                </div>
            </div>
        </main>
    );
}
