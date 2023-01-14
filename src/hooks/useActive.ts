import { useEffect, useState, useRef } from 'react'


export function useActive(time: number, element:any) {
    const [active, setActive] = useState(false)
    const timer = useRef() as any;
    const events = [
        'keypress', 'mousedown', 'touchmove'
    ]

    useEffect(() => {
        const handleEvent = () => {
            setActive(true);
            if (timer.current) {
                window.clearTimeout(timer.current);
            }

            timer.current = window.setTimeout(() => {
                setActive(false);
            }, time)
        };

        // var element = document.getElementById('tete')

        events.forEach(
            (event) => element?.addEventListener(event, handleEvent)
        );

        return () => {
            events.forEach(
                (event) => {
                    element?.removeEventListener(event, handleEvent)
                }
            );
        };

    }, [time]);

    return active;
}