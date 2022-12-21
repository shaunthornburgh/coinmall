import React, {useContext, useEffect, useCallback} from "react";
import {Cookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import AuthContext from "../context/authContext";

export const useAuth = () => {
    const appUrl = process.env.MIX_APP_URL;
    let navigate = useNavigate();
    // const [userData, setUserdata] = React.useState({signedIn: true, user: null, portfolio: []});
    const {authData, setAuthData} = useContext(AuthContext);

    useEffect(() => {
        setAuthData(authData);
    }, [authData.signedIn]);

    function getAuthCookieExpiration() {
        let date = new Date();
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));  // 7 days
        return date;
    }

    function setAsLogged(user) {
        const cookie = new Cookies();
        cookie.set('is_auth', true, {path: '/', expires: getAuthCookieExpiration(), sameSite: 'lax', httpOnly: false});
        setAuthData((prev) => ({
            ...prev,
            signedIn: true,
            user,
            didFinishValidatingSignIn: true
        }))

        axios
            .get(appUrl + '/api/coins')
            .then(response => {
                setAuthData((prev) => ({
                    ...prev,
                    portfolio: response.data.data
                }))
            })
            .catch(error => {
                setLogout();
            });

        navigate('/markets');
    }

    const setLogout = useCallback(() => {
        const cookie = new Cookies();
        cookie.remove('is_auth', {path: '/', expires: getAuthCookieExpiration(), sameSite: 'lax', httpOnly: false});
        setAuthData({
            signedIn: false,
            user: null,
            didFinishValidatingSignIn: false,
            portfolio: []
        });
        navigate('/login');
    }, []);

    const loginUserOnStartup = useCallback( () => {
        const cookie = new Cookies();
        if (cookie.get('is_auth')) {
            setAuthData((prev) => ({
                ...prev,
                signedIn: true,
                didFinishValidatingSignIn: true
            }));
            axios
                .post(appUrl + '/api/me')
                .then(response => {
                    setAuthData((prev) => ({
                        ...prev,
                        signedIn: true,
                        user: response.data.data,
                        didFinishValidatingSignIn: true
                    }))
                })
                .catch(error => {
                    setLogout();
                });

            axios
                .get(appUrl + '/api/coins')
                .then(response => {
                    setAuthData((prev) => ({
                        ...prev,
                        portfolio: response.data.data
                    }))
                })
                .catch(error => {
                    setLogout();
                });
        } else {
            setAuthData({
                signedIn: false,
                user: null,
                didFinishValidatingSignIn: false,
                portfolio: []
            });
        }
    }, [authData]);

    const setPortfolio = useCallback( (newPortfolio) => {
        setAuthData({
            ...authData,
            portfolio: newPortfolio
        })
    }, [authData]);

    return {
        authData,
        setAsLogged,
        setLogout,
        loginUserOnStartup,
        setPortfolio
    }
};
