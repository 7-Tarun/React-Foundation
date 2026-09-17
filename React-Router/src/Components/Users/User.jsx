import { useParams } from 'react-router-dom'

function User(){
    const {id} = useParams();

    return(
        <>
        <h2 className=' m-10 bg-gray-600 p-4 rounded-3xl text-white text-2xl text-center'>User: {id}</h2>
        </>
    )
}

export default User