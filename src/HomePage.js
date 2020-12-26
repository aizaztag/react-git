import React, { Component  ,useContext  } from 'react';
import UserContext from './Context';


class HomePage extends Component {
    static contextType = UserContext
  
    render() {
      const { user, setUser } = this.context
      console.log(user)
      return (
        <div>
          <button
            onClick={() => {
              const newUser = { name: 'Joe', loggedIn: true }
  
              setUser(newUser)
            }}
          >
            Update User
          </button>
          <p>{`Current User: ${user.name}`}</p>
        </div>
      )
    }
  }

export default HomePage;

//   const HomePage = () => {
//    const user  = useContext(UserContext)
//    const logged = false ; 
//    return ( (user.loggedIn) ? 
//         <div>{user.name}</div>
//         : <div>{user.login()}</div>
        
//       )
// }