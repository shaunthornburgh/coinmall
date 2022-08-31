import React from "react";

export const Footer = () => {
    return (
        <footer>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                <div className="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left">
                    <span className="block sm:inline">&copy; 2022 <a className="hover:underline" href="https://www.shaunthornburgh.com" target="_blank">Thornburgh Consulting Ltd</a> | </span>
                    <span className="block sm:inline">All rights reserved | </span>
                    <span className="block sm:inline">Powered by <a className="hover:underline" href="https://www.coingecko.com/en/api" target="_blank">CoinGecko</a></span>
                </div>
            </div>
        </footer>
    );
};
