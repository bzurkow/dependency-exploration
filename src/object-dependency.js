import { useState, useEffect } from 'react';

const ObjectDependency = () => {
    const object = {a: 1}
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count+1)
    }, [object]);

    return (
        <div>
            <div>Object as Dependency</div>
            <br />
            <br />
            count: {count}
        </div>
        
    )
};

export default ObjectDependency