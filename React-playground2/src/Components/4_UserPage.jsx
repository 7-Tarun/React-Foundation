import { useParams } from "react-router-dom";

function UserPage() {
    const {name} = useParams();

    return(
        <>
        <h1>Hello: {name} </h1>
        <p>Dynamically Update from the id (text by changes the URL Name)</p>
        </>
    )   
}

export default UserPage