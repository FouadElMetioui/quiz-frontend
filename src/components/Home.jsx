import React, {useEffect, useState} from "react";
import {FaJava, FaJs, FaPython} from "react-icons/fa";
import springLogo from '../assets/images/spring.png';
import {useNavigate} from "react-router-dom";
import {useQuizContext} from "../context/quizContext";
import {getData} from "../data/data";


export function Home() {

    const {quiz,setQuiz} = useQuizContext()
    const navigate  = useNavigate()

    useEffect(() => {
        return () => {
            setQuiz(getData())
        };
    }, []);

    return (
        <>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-auto mt-48 w-3/4">
                <div className="intro w-full mr-6">
                    <h1 className="text-7xl text-gray-700">Welcome to the
                        <span className="font-bold"> Dev Quiz!</span>
                    </h1>
                    <p className="text-3xl text-gray-600 italic mt-12"> Pick a subject to get started.</p>
                </div>
                <div className="h-1/2 w-full mx-6">
                    <div onClick={() => navigate('/quiz/java')}
                        className="bg-white p-8 mb-5 rounded-3xl shadow-md cursor-pointer text-3xl font-bold text-gray-700 flex">
                        <FaJava className="text-red-500 mr-8" size={40}/>
                        <span className="mt-1">JAVA</span>
                    </div>
                    <div onClick={() => navigate('/quiz/spring')}
                        className="bg-white p-8 mb-5 rounded-3xl shadow-md cursor-pointer text-3xl font-bold text-gray-700 flex">
                        <img src={springLogo} alt="spring boot logo" className="w-11 h-11 mr-8"/>
                        <span className="mt-1">Spring Boot</span>
                    </div>
                    <div onClick={() => navigate('/quiz/javascript')}
                        className="bg-white p-8 mb-5 rounded-3xl shadow-md cursor-pointer text-3xl font-bold text-gray-700 flex">
                        <FaJs className="text-red-500 mr-8" size={40}/>
                        JAVASCRIPT
                    </div>
                    <div onClick={() => navigate('/quiz/python')}
                        className="bg-white p-8 rounded-3xl shadow-md cursor-pointer text-3xl font-bold text-gray-700 flex">
                        <FaPython className="text-red-500 mr-8" size={40}/>
                        PYTHON
                    </div>
                </div>
            </div>


        </>
    )
}