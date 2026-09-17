import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();

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

export default Github;

//REACT ROUTER LOADERS & useLoaderData

export const gitLoader = async () => {
    try{
       const url = "https://api.github.com/users/7-Tarun";
        const response = await fetch(url);
        return await response.json();
    }
    catch(error){
        alert(`Error Occured: Can't fetch the data ${error}`);
        return null;
    }
}

// Fetch data BEFORE the component renders to eliminate UI flicker and loading lags.

// Working:
// 1. Loader Function → An async function fetches and returns the data.
// 2. Route Registration → Pass the loader using the `loader` prop.
// 3. Data Loading → React Router runs the loader and waits for the data.
// 4. useLoaderData() → The component gets the loaded data without useState or useEffect.