import { useState, useEffect } from "react";

function Github() {
    const[data,setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try{
                const url = "https://api.github.com/users/7-Tarun";
                const response = await fetch(url);
                const resData = await response.json();
                
                setData(resData);
            }
            catch(error){
                alert("Error Occured: Can't fetch the data plz don't try again");
            }
        }

        fetchData();

    }, [])

    return(
        <>
        <div className="text-center text-3xl text-white m-4 p-4 bg-gray-400">
            Github Followers: {data.followers}
        </div>
        </>
    )
}

export default Github