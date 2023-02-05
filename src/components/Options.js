import React from 'react'
import { arrayItems } from '../AiOptions'
import { useNavigate } from 'react-router-dom';
function Options() {
    const navigate = useNavigate();

    return (
        <div><h1 className="heading">ChatGPT Clone</h1>

            <div className="grid-main">
                {arrayItems.map((item,index) => {
                    return (
                        
                        <div
                            className="grid-child"
                            onClick={()=>{
                                console.log(index)
                                navigate(`/tasks/${index}`);

                            }}
                            key = {item.id}
                        >
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                        
                    );
                })}
            </div></div>
    )
}

export default Options