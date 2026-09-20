import { UserContext } from "../Context/ContextProvider"
import { useContext } from "react"

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Login kar BC</div>

    return <div>Welcome: {user.userName}</div>
}

export default Profile