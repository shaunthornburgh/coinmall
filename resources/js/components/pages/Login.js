import React from "react";
import {Link} from "react-router-dom"

export const Login = () => {
    return (
        <main className="-mt-24 pb-8 mb-auto">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-indigo-100">Sign in to
                            your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or
                            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500" to="/register"> click here to register </Link>
                        </p>
                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="py-8 px-4 sm:rounded-lg sm:px-10">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-indigo-100"> Email
                                        address </label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email" required
                                               className="block w-full bg-white bg-opacity-20 py-2 px-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password"
                                           className="block text-sm font-medium text-indigo-100"> Password </label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password"
                                               autoComplete="current-password" required
                                               className="block w-full bg-white bg-opacity-20 py-2 px-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox"
                                               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                            <label htmlFor="remember-me"
                                                   className="ml-2 block text-sm text-indigo-100"> Remember me </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#"
                                           className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your
                                            password? </a>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign
                                        in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
