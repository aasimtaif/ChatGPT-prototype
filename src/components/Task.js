import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { arrayItems as optionArray } from '../AiOptions'
import '../App.css';
const { Configuration, OpenAIApi } = require("openai");

function Task() {

    const [input, setInput] = useState();
    const [result, setResult] = useState();

    const { id } = useParams()
    // console.log(optionArray[id])
    const configuration = new Configuration({
        apiKey: "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"
    });
    const openai = new OpenAIApi(configuration);

    // console.log(optionArray[id])
    const handleClick = async () => {
        let option = {

                model: "text-davinci-003",
                prompt: `${optionArray[id].description} ${input}.`,
                temperature: 0,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,

        }
        let object = { ...option}
        const response = await openai.createCompletion(object);
      
        console.log(response)
        console.log(object)
        console.log(input)

    }


    //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




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