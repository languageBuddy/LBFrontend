import React, { useState, useEffect } from 'react';
import './exam.scss'
import { Link, Redirect } from 'react-router-dom'
import {
    Button
} from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../redux/actions/counterAction'
import { fetchQuestion } from '../../redux/actions/examAction'
import { getAuth } from '@firebase/auth';
import axios from 'axios';

function Exam() {

    const exam = useSelector(state => state.exam)

    const counter = useSelector(state => state.counter)
    const [questions, setquestions] = useState([])
    const dispatch = useDispatch()

    const handleButtonClick = async (isCorrect) => {
        if (isCorrect === true) {
            await dispatch(increment({
                QueryType: 'INCREMENT_SCORE',
                count: 1
            }))
        }

        const nextQuestion = counter.currentQuestion + 1;
        if (nextQuestion < questions.length) {
            await dispatch(increment({
                QueryType: 'INCREMENT_QUESTION_NO',
                count: 1
            }))
        }
        else {
            await dispatch(increment({
                QueryType: 'SHOW_RESULT',
                count: true
            }))
        }
    }
    const handleClick = () => {
        dispatch(increment({
            QueryType: 'RESET',
            count: 0
        }))
    }

    useEffect(() => {
        axios.get('http://localhost:5000/exam/fetch')
            .then(response => {
                dispatch(fetchQuestion(response.data))
                setquestions(response.data)
            }).catch(error => {
                console.log(error)
            })
    }, [counter.showscore])

    if(questions && questions[counter.currentQuestion - 1] )
    var current = new Audio(questions[counter.currentQuestion].questionAudioUrl)


   

    const auth = getAuth();


    var user = auth.currentUser;
    if (questions.length > 0)
        var aud = new Audio(questions[counter.currentQuestion].questionAudioUrl)

    const playOrPause = () => {
        if (aud.paused == true) {
            aud.play()
        }
        else {
            aud.pause()
        }
    }

    if (!user) {
        return <Redirect to="/please-login" />;
    } else {
        return (
            <div className="exam-body">
                <div className='exam-app'>

                    {counter.showscore ? (
                        <div className='score-section'>
                            <h3 className="mb-3"> You scored {counter.score} out of {questions.length} </h3>
                            <Link to="/dashboard" className="mb-3"> <Button variant="outline-danger" onClick={handleClick}>Go to Dashboard </Button> </Link>
                            <Link to="/dashboard/exam/answer"> <Button variant="outline-success"> Correct Answer </Button> </Link>
                        </div>
                    ) : (
                        <div className="exam-card">
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {counter.currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>
                                    <h4 className="heading">{questions && questions[counter.currentQuestion] && questions[counter.currentQuestion].questionText} </h4>
                                    <button onClick={playOrPause} className="btn btn-primary"> <i class="bi bi-play-circle"></i> Play/Pause</button>
                                </div>
                            </div>
                            <div className='answer-section'>
                                {
                                    questions.length > 0 && questions[counter.currentQuestion] && questions[counter.currentQuestion].answerOptions.map(option => {
                                        return (
                                            <button className="exam-button" onClick={() => handleButtonClick(option.isCorrect)}>{option.answerText}</button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

}

export default Exam