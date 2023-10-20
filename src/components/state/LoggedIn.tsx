import { useState } from "react" //step 1: import the useState from react

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false) //step 2: create a useState variable| destructure

    
    const handleLogin = () => {
        setIsLoggedIn(true) //step 4: define the handler functions
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div> User is {isLoggedIn ? 'logged In' : 'logged Out'} </div> 
        </div> // step 3: use ternary to indicate whether user logged in or out. isLoggedIn state(true) ?(if yes print) 'logged In' :(else) 'logged Out'
    )
}