import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import {Layout} from "./Layout";
import {Markets} from "../pages/Markets";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import {useAuth} from "../hooks/useAuth";
import AuthContext from "../context/authContext";
import {Portfolio} from "../pages/Portfolio";
import {Coin} from "../pages/Coin";

function RootApp() {
    const {userData} = useAuth();
    const [authData, setAuthData] = useState({signedIn: userData.signedIn, user: userData.user});

    return (
        <AuthContext.Provider value={{authData, setAuthData }}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Markets /> } />
                    <Route path="/markets" element={<Markets /> } />
                    <Route path="/portfolio" element={<Portfolio /> } />
                    <Route path="/portfolio/:id" element={<Portfolio /> } />
                    <Route path="/portfolio/:id/:timeFrame" element={<Portfolio /> } />
                    <Route path="/login" element={<Login /> } />
                    <Route path="/register" element={<Register /> } />
                    <Route path="/coin/:id" element={<Coin /> } />
                    <Route path="/coin/:id/:timeFrame" element={<Coin /> } />
                </Routes>
            </Layout>
        </AuthContext.Provider>
    );
}
export default RootApp;
if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <RootApp />
        </BrowserRouter>
        , document.getElementById('app'));
}
