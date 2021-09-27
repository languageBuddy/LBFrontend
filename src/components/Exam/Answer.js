import React, { useState, useEffect } from 'react'
import './exam.scss'
import { useSelector } from 'react-redux'

function Answer() {

    //takes all question from react-redux
    const exam = useSelector(state => state.exam)
    const [questions, setquestions] = useState([])
    useEffect(() => {
        setquestions(exam.questions)
    }, [questions])

    return (
        <div className="contaier m-3">
            {

                questions.map(question => {
                    return (
                        <div class="card mb-3" style={{ marginLeft: "30px", marginRight: "30px" }} key={question.questionText}>
                            <div class="card-header">
                                <audio id="song" controls>
                                    <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3" type="audio/mp3" />
                                </audio>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "green" }}>
                                <h5 class="card-title" style={{ color: "#FBFBFB" }}> Correct Answer : {question.answerOptions[question.correct - 1].answerText}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Answer
