import { useState, useEffect } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // async function fetchData() :Normal function still work but we used arrow function below
        const fetchData = async () => {
            try{
                const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
                const response = await fetch(url);
                const resData = await response.json();

                setData(resData[currency]);
            }
            catch(e) {
                alert(`Error: ${e}`);
            }
        }

        fetchData();

    },[currency])

    return data
}

export default useCurrency


// import { useState, useEffect } from "react";

// function useCurrency(currency) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then((res) => res.json)
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])

//     return data
// }

// export default useCurrency