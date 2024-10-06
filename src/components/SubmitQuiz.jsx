import {Header} from "./Header";
import {FaJava, FaJs, FaPython} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useQuizContext} from "../context/quizContext";
import springLogo from "../assets/images/spring.png";
import { Flex, Progress } from 'antd';


export function SubmitQuiz() {
    const navigate  = useNavigate()
    const [score, setScore] = useState(0)
    const [technology, setTechnology] = useState('Java')
    const {quiz} = useQuizContext()

    useEffect(() => {
        return () => {
            setScore(quiz.quiz[0].score)
            const path = window.location.pathname;
            const technology = path.split("/")[2];
            setTechnology(technology)
        };
    }, []);


    const getIcon = (technology) => {
        switch(technology) {
            case 'java' : return <FaJava className="text-red-500 mr-8" size={40}/>;
            case 'python' : return <FaPython className="text-red-500 mr-8" size={40}/>;
            case 'spring' :
                return <img src={springLogo} alt="spring boot logo" className="w-11 h-11 mr-8"/>;
            case 'javascript' :
                return <FaJs className="text-red-500 mr-8" size={40}/>;
            default : return <FaJava className="text-red-500 mr-8" size={40}/>;
        }
    }


    function navigatToHome() {
        
        navigate('/quiz')
    }

    return (
        <>
            <div className="min-h-screen flex-col mx-auto w-4/5">
                <Header/>
                <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-auto mt-28 w-full">
                    <div className="w-full mr-6">
                        <h1 className="text-7xl text-gray-700 sm:text-6xl md:text-6xl">Quiz Completed!
                            <span className="font-bold"> You Scored ... </span>
                        </h1>
                        <div className="mt-12 flex justify-center">
                            <Progress
                                className="mt-5"
                                type="circle"
                                percent={score * 10}
                                size={150}
                                status='success'
                               />
                        </div>

                    </div>
                    <div className=" h-1/3 md:h-1/2 lg:h-1/2">
                        <div className="bg-white p-8 rounded-3xl shadow-md
                    text-gray-700 flex-col">
                            <div className="flex justify-center mt-4 w-full">
                                {getIcon(technology)}
                                <p className="text-3xl text-gray-800 mt-3">{technology.toUpperCase()}</p>
                            </div>
                            <span className="flex justify-center mt-5 w-full text-9xl text-gray-800 font-bold">
                                {score}
                        </span>
                            <span
                                className="w-full flex justify-center text-gray-700 text-2xl mt-4 font-serif font-extrabold">Out
                            of 10
                        </span>
                        </div>
                        <div onClick={() => navigatToHome()}
                            className="p-7 mt-3 rounded-3xl shadow-md cursor-pointer text-3xl
                         font-bold text-white text-center bg-red-500 hover:bg-red-300">
                                Play Again
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}