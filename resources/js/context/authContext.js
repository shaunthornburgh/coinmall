import React from "react";

const authData = {
    signedIn: false,
    didFinishValidatingSignIn: false,
    user: null,
    portfolio: []
};

export default React.createContext({authData: {...authData}, setAuthData: (val) => {}});
