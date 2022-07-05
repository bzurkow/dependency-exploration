import { useState, useEffect, useMemo } from 'react';



const MemoizedObjectDependency = () => {
    const object = {a: 1}
    const [count, setCount] = useState(0);

    const string = JSON.stringify(object);

    const memoizedObject = useMemo(() => object, [object.a]);

    useEffect(() => {
        setCount(count+1)
    }, [memoizedObject]);

    return (
    <div>
        <div>Memoized Object as Dependency</div>
        <br />
        <br />
        count: {count}
    </div>
    )
};

export default MemoizedObjectDependency