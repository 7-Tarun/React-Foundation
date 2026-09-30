import { useState, useEffect } from "react";

function JokeFetcher() {

    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response  => response.json())
        .then(data => {
            setJoke(`${data.setup} - ${data.punchline}`)
            setLoading(false)
        })
        .catch(err => {
            setError(`failed to fetch Joke ${err}`);
            setLoading(false);
        })
    }, []);

    if(loading) return <p>Loading...</p> 
    if(error) return <p>Some thing is wrong</p>;

    return(
        <>
        <p>Joke: {joke}</p>
        </>
    )
}

export default JokeFetcher

// This approach works, but becomes repetitive and harder to manage:

// 1. Multiple components → Each manually handles loading, error, and data states.
// 2. No caching → Revisiting the page fetches the data again.
// 3. Extra features → Retry, refetching, polling, etc. must be implemented manually.

// This is why data-fetching libraries and React Router loaders can simplify the architecture.