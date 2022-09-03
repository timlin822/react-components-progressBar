import {useState,useEffect} from 'react';

import './ProgressBar.css';

const ProgressBar=({done})=>{
    const [style,setStyle]=useState({});

    useEffect(()=>{
        setStyle({
            width: `${done}%`,
            opacity: 1
        });
    },[]);

    return (
        <div className="progress-bar">
            <div className="progress-bar-done" style={style}>{done}%</div>
        </div>
    );
}

export default ProgressBar;