import { useState, useEffect } from 'react';


const StringDependency = () => {
    const object = {a: 1}
    const [count, setCount] = useState(0);

    const string = JSON.stringify(object);

    useEffect(() => {
        setCount(count+1)
    }, [string]);

    return (
        <div>
            <div>String as Dependency</div>
            <br />
            <br />
            count: {count}
        </div>
        
    )
};

export default StringDependency