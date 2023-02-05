import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import '../App.css';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
function Task() {
    const [input, setInput] = useState();
    const { id } = useParams()
    // console.log(id)
    const handleClick = () => {
        console.log(input)
    }





    return (
        <div className='input-output'>
            <textarea
                className="text-area"
                cols={30}
                rows={5}
                onChange={(e) => {
                    setInput(e.target.value)

                }}
            ></textarea>
            <button className="action-btn" onClick={handleClick} >
                DO YOU STUFF!
            </button>
            <div className='result'>
                <h3 className="result-text">result</h3>
            </div>
        </div>
    )
}

export default Task