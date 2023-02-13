import { useEffect, useState } from 'react';

const useTimer = (duration: number) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [isRunning, setIsRunning] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime === 0) {
                        clearInterval(intervalId);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, toggle]);

    const handleStart = () => {
        setTimeLeft(duration);
        setIsRunning(true);
        setToggle((oldState) => !oldState);
    };

    return { timeLeft, handleStart };
};

export default useTimer;
