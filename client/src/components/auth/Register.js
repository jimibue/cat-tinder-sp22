import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Register = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = useContext(AuthContext)
    // not need but nice for UX
    // const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        // with devise_token_auth
        // email must be 'valid' email and unique
        // password must be greater than = 6 chars in length
        auth.handleRegister({email, password})
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <p>email</p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <p>password</p>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button>register</button>
            </form>
        </div>
    )
}
export default Register