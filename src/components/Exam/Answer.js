import React, { useState, useEffect } from 'react'
import './exam.scss'
import { useSelector } from 'react-redux'
import { getAuth } from '@firebase/auth';
import { Redirect } from 'react-router-dom'
import { pleaseLogin } from '../Auth/pleaseLogin'

function Answer() {

    const auth = getAuth();
    var user = auth.currentUser;


    //takes all question from react-redux
    const exam = useSelector(state => state.exam)
    const [questions, setquestions] = useState([])
    useEffect(() => {
        setquestions(exam.mcqs)
    }, [questions])


    if (!user) {
        return <Redirect to="/please-login" />;
    }
    else {
        return (<>
            <div className="contaier m-3">
                {
                    questions && questions.map(question => {

                        return (
                            <div class="card mb-3" key={question.questionText}>
                                <div class="card-header d-flex flex-wrap">
                                    <audio id="song" controls>
                                        <source src={question.questionAudioUrl} type="audio/mp3" />
                                    </audio>
                                </div>
                                <div class="card-body" style={{ backgroundColor: "#3AAFA9" }}>
                                    <h5 class="card-title" style={{ color: "#DEF2F1" }}> Correct Answer : {question.answerOptions[question.correct - 1].answerText}</h5>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

            <footer id="footer">

                <div class="footer-copyright text-center py-3">© 2021 <strong>LANGUAGEBUDDY</strong>.
                    ALL RIGHTS RESERVED.
                </div>

            </footer>
        </>
        )
    }
}

export default Answer
