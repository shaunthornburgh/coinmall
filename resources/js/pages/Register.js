import React, {useState} from "react";
import {Link} from "react-router-dom"
import {useForm} from "../hooks/useForm";

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const { setErrors, renderFieldError, navigate } = useForm();

    const makeRequest = (e) => {
        e.preventDefault();
        setErrors(null);
        axios.post('/api/register', {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation
        }).then(response => {
            if (response.data) {
                alert("Register success");
                navigate('/login');
            }
        }).catch(error => {
            if(error.response) {
                if (error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
            }
        });
    };

    return (
        <main className="-mt-24 pb-8 mb-auto">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-indigo-100">Register</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or
                            <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500" to="/login"> click here to login </Link>
                        </p>
                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="py-8 px-4 sm:rounded-lg sm:px-10">
                            <form className="space-y-6" action="#" method="POST" onSubmit={makeRequest}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-indigo-100"> Name </label>
                                    <div className="mt-1">
                                        <input id="name" name="name" type="text" autoComplete="name" required
                                               className="block w-full bg-white bg-opacity-20 py-2 px-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                                               value={name} onChange={e => setName(e.target.value)}
                                        /> {renderFieldError('name')}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-indigo-100"> Email address </label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" autoComplete="email" required
                                               className="block w-full bg-white bg-opacity-20 py-2 px-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                                               value={email} onChange={e => setEmail(e.target.value)}
                                        /> {renderFieldError('email')}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-indigo-100"> Password </label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password" autoComplete="current-password" required
                                               className="block w-full bg-white bg-opacity-20 py-2 px-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                                               value={password} onChange={e => setPassword(e.target.value)}
                                        /> {renderFieldError('password')}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-indigo-100"> Confirm Password </label>
                                    <div className="mt-1">
                                        <input id="password_confirmation" name="password_confirmation" type="password" autoComplete="new-password" required
                                               className="block w-full bg-white bg-opacity-20 py-2 px-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                                               value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}
                                        /> {renderFieldError('password_confirmation')}
                                    </div>
                                </div>

                                <div className="pt-7">
                                    <button type="submit"
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register
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
