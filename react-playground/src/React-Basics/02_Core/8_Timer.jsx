import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000)

        return () => {
            clearInterval(interval);
            console.log("Timer Stopped!");
        }
    }, [])

    return (
        <>
        <h2>Timer: {seconds}</h2>
        </>
    )
}

export default Timer

// Cleanup functions are needed only when an effect creates something that must be removed:
// 1. Timers/Intervals → clearInterval() or clearTimeout()
// 2. Event Listeners → removeEventListener()
// 3. API Requests/Subscriptions → abort or unsubscribe when no longer needed
//
// If an effect creates nothing to clean up, adding a cleanup function is unnecessary.