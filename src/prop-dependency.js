import { useState, useEffect } from 'react';

const PropDependency = ({object}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count+1)
    }, [object]);

    return (
        <div>
            <div>Prop Object as Dependency</div>
            <br />
            <br />
            count: {count}
        </div>
        
    )
};

export default PropDependency