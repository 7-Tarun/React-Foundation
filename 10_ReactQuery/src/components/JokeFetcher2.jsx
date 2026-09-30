import { useQuery } from "@tanstack/react-query";

function JokeFetcher2() {
    const { data, isLoading, error} = useQuery({
        queryKey: ['joke'],
        queryFn: () => fetch('https://official-joke-api.appspot.com/random_joke') .then(res => res.json())
    })

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return(
        <>
        <p>{data.setup} - {data.punchline}</p>
        </>
    )
}

export default JokeFetcher2

// useQuery automatically manages the query's data, loading, and error states.
// queryKey uniquely identifies the query and enables caching.
// If the same key is used again, cached data can be shown while fresh data is fetched.
// queryFn contains the actual data-fetching logic and must return a Promise.

// Example:
// const { data, isLoading, error } = useQuery({
//   queryKey: ["joke"],
//   queryFn: fetchJoke,
// });