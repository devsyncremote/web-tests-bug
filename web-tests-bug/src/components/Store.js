import {useEffect, useState} from "react";

export const Store = ({ children }) => {
    const [store, setStore] = useState({});

    useEffect(() => {
        setStore({
            user: {
                name: 'Test'
            }
        })
    }, [])

    return (
        <>
            {children}
        </>
    )
}
