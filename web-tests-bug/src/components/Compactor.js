import {useEffect, useState} from "react";

export const Compactor = ({ children }) => {
    const [compactStringifyDatas, setCompactStringifyDatas] = useState("");

    useEffect(() => {
        const myDatas = "myDatas";
        const myOtherDatas = "myOtherDatas"

        setCompactStringifyDatas(`${myDatas + myOtherDatas} - ${myOtherDatas + myDatas}`);
    }, [])

    return (
        <>
            {children}
        </>
    )
}
