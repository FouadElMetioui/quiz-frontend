import React, {useEffect, useState} from "react";
import {Flex, Progress} from 'antd';
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useQuizContext} from "../context/quizContext";
import {Header} from "./Header";
import {useNavigate} from "react-router-dom";


export function Question({question, onNextQuestion}) {

    const [answer, setAnswer] = useState('vide')
    const [validateBtnClicked, setValidateBtnClicked] = useState(false)
    const [btnLabel, setBtnLabel] = useState('Next')
    const [progress, setProgress] = useState(0)
    const [technology, setTechnology] = useState('Java')
    const navigate = useNavigate()
    const {quiz,setQuiz} = useQuizContext()



    useEffect(() => {
        const path = window.location.pathname;
        const technology = path.split("/")[2];
        setAnswer('vide')
        setValidateBtnClicked(false)
        if (quiz.quiz[0].currentQuestion + 1 === quiz.quiz[0].questions.length ) {
            setBtnLabel('Submit Quiz')
        }
    }, [question]);

    const handleAnswer = () => {
        updateScore()
        setValidateBtnClicked(true)
        if (answer === 'vide') {
            return
        }
        if(btnLabel === 'Submit Quiz') {
            navigate(`/quiz/${technology}/submit`)
        }
        setProgress((quiz.quiz[0].currentQuestion + 1) * 100 / quiz.quiz[0].questions.length)
        onNextQuestion()
    }

    const checkIfAnswered = () => {
        if (answer === 'vide' && validateBtnClicked) {
            return false
        }
        return true
    }


    const updateScore = () => {
        if (answer === true) {
            setQuiz((prevQuiz) => {
                const updatedQuizArray = [...prevQuiz.quiz];
                updatedQuizArray[0] = {
                    ...updatedQuizArray[0],
                    score: prevQuiz.quiz[0].score + 1
                };
                return {
                    ...prevQuiz,
                    quiz: updatedQuizArray
                };
            });
        }
    }

    return (<>
        <div className="min-h-screen flex-col mx-auto w-4/5">
            <Header/>
            <div className="mt-28 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                    <h1 className="text-gray-700 italic text-2xl">Question {quiz.quiz[0].currentQuestion + 1} of {quiz.quiz[0].questions.length}</h1>
                    <p className="text-5xl font-bold mt-4">{question.question}</p>

                    <Flex wrap className="mt-20 ml-4">
                        <Progress type="circle" percent={progress} status="exception"/>
                    </Flex>
                </div>
                <div className="w-full mx-3">
                    <div tabIndex="0" onClick={() => setAnswer(question.options[0].isCorrect) }
                         className="group bg-white p-4 mb-5 rounded-3xl shadow-md cursor-pointer text-3xl font-bold text-gray-700 flex border
                            hover:border-red-700 hover:border-4 focus:border-4 focus:border-red-700">
                            <span className="p-4 bg-gray-100 text-gray-700 group-hover:text-red-700 flex align-center
                            group-hover:bg-red-50 text-4xl rounded-2xl group-focus:bg-red-500 group-focus:text-white">A</span>
                        <span className="mt-1 text-3xl p-3 flex justify-center w-full">{question.options[0].option}</span>
                    </div>

                    <div tabIndex="0" onClick={() => setAnswer(question.options[1].isCorrect)}
                         className="group bg-white pl-3 pb-3 pt-3 mb-5 rounded-3xl shadow-md cursor-pointer text-3xl font-bold text-gray-700 flex border
                            hover:border-red-700 hover:border-4 focus:border-4 focus:border-red-700">
                            <span className="p-4 bg-gray-100 text-gray-700 group-hover:text-red-700 flex align-center
                            group-hover:bg-red-50 text-4xl rounded-2xl group-focus:bg-red-500 group-focus:text-white">B</span>
                        <span
                            className="mt-1 text-3xl p-3 flex justify-center w-full">{question.options[1].option}</span>
                    </div>

                    <div tabIndex="0" onClick={() => setAnswer(question.options[2].isCorrect)}
                         className="group bg-white p-4 mb-5 rounded-3xl shadow-md cursor-pointer text-3xl font-bold text-gray-700 flex border
                            hover:border-red-700 hover:border-4 focus:border-4 focus:border-red-700">
                            <span className="p-4 bg-gray-100 text-gray-700 group-hover:text-red-700 flex align-center
                            group-hover:bg-red-50 text-4xl rounded-2xl group-focus:bg-red-500 group-focus:text-white">C</span>
                        <span
                            className="mt-1 text-3xl p-3 flex justify-center w-full">{question.options[2].option}</span>
                    </div>

                    <div tabIndex="0" onClick={() => setAnswer(question.options[3].isCorrect)}
                         className="group bg-white p-4 mb-5 rounded-3xl shadow-md cursor-pointer text-3xl font-bold text-gray-700 flex border
                            hover:border-red-700 hover:border-4 focus:border-4 focus:border-red-700">
                            <span className="p-4 bg-gray-100 text-gray-700 group-hover:text-red-700 flex align-center
                            group-hover:bg-red-50 text-4xl rounded-2xl group-focus:bg-red-500 group-focus:text-white">D</span>
                        <span
                            className="mt-1 text-3xl p-3 flex justify-center w-full">{question.options[3].option}</span>
                    </div>

                    <div onClick={() => handleAnswer()}
                         className="p-7 mb-5 rounded-3xl shadow-md cursor-pointer text-3xl
                            font-bold text-white text-center bg-red-500 hover:bg-red-300">
                        {btnLabel}
                    </div>

                    {
                        !checkIfAnswered() ?
                            <div className="mt-3 mb-11 mx-auto flex justify-center ">
                                <span className="text-red-500 mr-5 mt-1"><AiOutlineCloseCircle size={30}/></span>
                                <span className="text-red-500 text-2xl text-center">Please select an answer</span>
                            </div> : null
                    }
                </div>
            </div>

        </div>

    </>)
}