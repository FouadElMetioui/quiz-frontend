import {FaJava, FaJs, FaPython} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {useQuizContext} from "../context/quizContext";
import springLogo from "../assets/images/spring.png";


export function Header() {
    const [technology, setTechnology] = useState('Java');
    const {quiz,setQuiz} = useQuizContext();


    useEffect(() => {
        const path = window.location.pathname;
        const technology = path.split("/")[2];
        setTechnology(technology);
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

    return (
        <>
            <div className="mt-16 ml-4 flex">
                {getIcon(technology)}
                <span className="ml-4 text-4xl font-bold">{technology.toUpperCase()}</span>
            </div>
        </>
    )
}