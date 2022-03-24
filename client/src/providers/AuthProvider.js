// REVIEW OF PROVIDERS
// CREATE CONTEXT FROM REACT
// createContext => {Consumer,Provider} 
// a way to 'consume' the data and way to 'provide' data
// hooks: useContext(Context) a new and better way to 'consume' data
import axios from 'axios'

import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

// useContext(AuthContext) a new and better way to 'consume' data
// Has to be done from a functional component
export const AuthContext = React.createContext()

// another way to get the data (if it is class component)
export const AuthConsumer = AuthContext.Consumer

// create Provider
const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    // a null user is a not auth user (not logged)
    // if I have a user they will authenticated
    const [user, setUser] = useState(null)

    // register
    // called on submit on a register page
    const handleRegister = async (user)=>{
        try{
            let res = await axios.post('/api/auth',user)
            setUser(res.data.data)
            navigate('/')
            // setUser
        } catch(err){
            alert('error')
            console.log(err)
        }
    }

    // login

    // logout
    return (
        <AuthContext.Provider value={{user, handleRegister}}>
           {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider