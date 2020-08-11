import React, {useState} from 'react';


export default function ProgressBar(percentComplete) {
    const [progress, getProgress] = useState(percentComplete)
debugger
    return (
        <div>
            <h1>{percentComplete.percent}</h1>
        </div>
    )
}

