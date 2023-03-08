import React from "react";

const user = {email: "", password: "", isLoggedIn: false}
const logOut = () => {
    return
}

const AppContext = React.createContext({user, logOut})
const AppProvider = AppContext.Provider
const AppConsumer = AppContext.Consumer

export {AppProvider, AppConsumer}
export default AppContext
