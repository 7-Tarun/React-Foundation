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

    if(loading) return <p>Loading...;</p> 
    if(error) return <p>{error}</p>;

    return(
        <>
        <p>Joke: {joke}</p>
        </>
    )
}

export default JokeFetcher