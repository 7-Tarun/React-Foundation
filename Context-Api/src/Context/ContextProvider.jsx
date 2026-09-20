import { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider


// Here UserContext is the Label/ID.
// and ContextProvider is the Global Box.

// Every Context object comes with a built-in Provider component.
// It acts as a wrapper. Any component placed inside this wrapper gets direct
// access to the global state, completely eliminating prop drilling.

// Syntax Structure:
//     <UserContext.Provider value={/* data */}>
//         <LoginComponent />
//         <DashboardComponent />
//     </UserContext.Provider>