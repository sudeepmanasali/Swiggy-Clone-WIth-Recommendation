import React from 'react'

import { useStateValue } from './StateProvider'
import { actionTypes } from './store/reducer'


function Rightbox() {
    const [{questions},dispatch] = useStateValue();

    const handleCurrentQue = (e)=>{
        const curque = e.target.id;
        console.log("right box ",curque);

        dispatch({
            type:actionTypes.CURRENTQUESTION,
            currentQuestion:curque
        })
    }

        
    return (
        <div className="rightbox">
             <div className="question_status_info">
                <div className="info">
                     <div className="box answered">1</div>
                    <div className="info text">Answered</div>
                </div>

                <div className="info">
                <div className="box notvisited">1</div>

                    <div className="info text">Not visited</div>
                </div>

                <div className="info">
                <div className="box notAnswered">1</div>

                    <div className="info text"> Not Answered</div>
                </div>

                <div className="info">
                <div className="box review">1</div>
                    <div className="info text">Marked fro review</div>
                </div>

                <div className="info">
                <div className="box answered_review">1</div>
                    <div className="info text">Answered and Marhed for review</div>
                </div>

  
              

             </div>
            <div className="questions">

                {
                    questions.map((quest,index)=>(
                        <div className={"box "+quest.status} id={quest.qid} onClick={handleCurrentQue}>{index+1 }</div>
                    ))
                }

            </div>
        </div>
    )
}

export default Rightbox
