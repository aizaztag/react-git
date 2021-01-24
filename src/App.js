import './App.css';
import React, { createContext, useState , useContext } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: "John Doe dss"
  });

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

function Main(title) {
  return (
    <div className="dashboardContent">
      <UserProvider>
        <TopNav />
        <Page />
      </UserProvider>
    </div>
  );
}

function App() {
  const [title, setTitle] = React.useState("Home");
  const [activeProfileId, setActiveProfileId] = React.useState("A1B2C3");
  
  return (
    <div className="app">
      <Dashboard {...{ activeProfileId, title}}/>
    </div>
  )
}

function Dashboard({activeProfileId, title}) {
  return (
    <div className="dashboard">
      <SideNav {...{activeProfileId}}/>
      <Main {...{title}}/>
    </div>
  )
}

function SideNav({activeProfileId}) {
  return (
    <nav className="side-nav">
      <h1>ID: {activeProfileId}</h1>
    </nav>
  )
}



function TopNav({title}) {
  return (
    <nav className="top-nav">
      <h1> {title} </h1>
    </nav>
  )
}

function Page({username}) {
  return <Profile {...{username}}/>
}

function Profile() {
  const userDetails = React.useContext(UserContext);
  let setUserDetails = useContext(UserDispatchContext);
//  setUserDetails({userDetails : {username : 'fdfd'}})

  console.log('setUserDetails' , setUserDetails)
  return <h1> {userDetails.username} </h1>;
}
export default App;
