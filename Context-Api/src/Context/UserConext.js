import React from "react";

const UserContext = React.createContext();

export default UserContext;


//Here UserContext is ths global box

// - Every Context object comes with a built-in Provider component.
// - It acts as a wrapper. Any component placed INSIDE this wrapper gets direct access to the global state, completely eliminating Prop Drilling.

// - Syntax Structure: 
//      <UserContext.Provider value={/* data */}>
//          <LoginComponent />
//          <DashboardComponent />
//      </UserContext.Provider>