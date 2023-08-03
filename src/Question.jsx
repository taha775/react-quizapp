import React, { useState } from 'react'

const Question = ({question,options,i,callback}) => {
    let [res,setres] = useState("")

  return (
    <>
    <div>

        <h1> <b>Question No :{i+1}</b></h1>
        <p> <b>{question} </b></p>

        {
            options.map((v,i)=>{
                return(
                    <>
                    <div>
                        <input type="radio"
                        onChange={(e) =>setres(e.target.value)}
                        name='select'
                        id=''
                        value={v}
                         />

                         <b>{v}</b>


                         
                    </div>
                    </>
                )
            })
        }
    </div>

    <br />
            <button style={{ border: "1px solid red" }}
            onClick={()=>callback(res)}
            >Next</button>
            <br />

    </>

  )
}

export default Question
