import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { arrayItems as optionArray } from '../AiOptions'
import '../App.css';
const { Configuration, OpenAIApi } = require("openai");

function Task() {

    const [input, setInput] = useState();
    const [result, setResult] = useState("");
    const [loading, setloading] = useState()

    const { id } = useParams()
    // console.log(optionArray[id])
    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    // console.log(optionArray[id])
    const handleClick = async () => {
        setloading(true)
        let object = {
            model: "text-davinci-003",
            prompt: `${optionArray[id].description} ${input}.`,
            temperature: 0,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,

        }
        const response = await openai.createCompletion(object);

        setResult(response.data.choices[0].text)
        console.log(response)
        console.log(object)
        setloading(false)



    }
    console.log(result)

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
                <h3 className="result-text">{
                    loading ? <>loading....
                    </> : <div className='result-output'>
                        {result.split("\n").map((item, key) => {
                            return (
                                <span className='result-text' key={key}>
                                    {item}
                                    <br />
                                </span>
                            );
                        })}</div>}

                </h3>
            </div>
        </div>
    )
}

export default Task