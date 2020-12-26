import React, { useState } from "react";
import HomePage from './HomePage'
import { UserProvider } from './Context'


function Login(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
                <label>
                    Frirst Name:
                    <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
      </form>
    );
}


function App() {
  const user = { name: 'Tania', loggedIn: false  , login:Login}
  
  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  )
}

export default App;
