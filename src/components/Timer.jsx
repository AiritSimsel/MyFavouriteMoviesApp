import React, {useState, useEffect} from 'react';

export default function Timer() {
    const [date, setDate] = useState(new Date());

    function Seconds() {
        setDate(new Date());
    }

    useEffect(() => {
        const countingSeconds = setInterval(Seconds, 1000);
        return function cleanup() {
            clearInterval(countingSeconds);
        };
    }, []);


    return (
        <>
        kell {date.toLocaleTimeString()}
        </>
    )
};