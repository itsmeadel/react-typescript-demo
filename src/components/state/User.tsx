import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}



export const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null) 
    //user are not loggedin in website. So 'null' as a default function os state
    //<AuthUser | null> informing typeScript 
   //{} as AuthUser as = type assertion | to let typeScript know that user is a typeOf user and won't be null

    const handleLogin = () => {
        setUser({
            name: 'Adie',
            email:'adie@example.com',
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name} </div> 
            <div>User email is {user?.email} </div>
        </div>
         //user? = asking if the object exists that can be null
         
    )
}