import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
    console.log("Child Render");

    return (
        <button onClick={onClick}>
            Child Button
        </button>
    );
});


const UseCallbackHook = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <Child onClick={handleClick} />
        </>
    );
}

export default UseCallbackHook