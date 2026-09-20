import { useState, useContext } from "react"
import { UserContext } from "../Context/ContextProvider"

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, password})
    }

    return(
        <>
        <h2>Login</h2>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="UserName" /> <br />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" /> <br />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login