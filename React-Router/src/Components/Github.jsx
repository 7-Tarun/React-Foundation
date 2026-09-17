import { useState, useEffect } from "react";

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://api.github.com/users/7-Tarun";
                const response = await fetch(url);
                const resData = await response.json();

                setData(resData);
            }
            catch (error) {
                alert("Error Occured: Can't fetch the data plz don't try again");
            }
        }

        fetchData();

    }, [])

    return (
        <>
            <div className=" text-start rounded-xl text-3xl text-white m-3 p-3 bg-gray-600">
                <span className="text-black">Github User Name:</span>{" "}{data.login}
            </div>
            <div className="text-start rounded-xl text-3xl text-white m-3 p-3 bg-gray-600">
                <span className="text-black">Github Profile:</span>{" "}{data.html_url}
            </div>
            <div className="text-start rounded-xl text-3xl text-white m-3 p-3 bg-gray-600">
                <span className="text-black">Github Followers:</span>{" "}{data.followers} 🥀
            </div>

            <div className=" flex text-start rounded-xl text-3xl text-white m-3 p-3 bg-gray-600">
                <img className="rounded-xl" src={data.avatar_url} width={200} height={200} alt="Git Picture" />
                <div className=" ml-5 ">
                    <span className="text-black">Github Bio:</span>{" "} {data.bio}
                </div>
            </div>
        </>
    )
}

export default Github