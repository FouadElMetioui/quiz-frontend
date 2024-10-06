import {Question} from "./Question";
import { useQuizContext} from "../context/quizContext";
import { useEffect, useState} from "react";

export function Quiz() {
    const {quiz,setQuiz} = useQuizContext();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [technology, setTechnology] = useState('Java');

    useEffect(() => {
        const path = window.location.pathname;
        const technology = path.split("/")[2];
        setTechnology(technology);

    }, [quiz, currentQuestionIndex]);


    const getQuizFromshoisedTechnology = () => {
        switch(technology) {
            case 'java' : return quiz.quiz[0] ;
            case 'python' : return quiz.quiz[1];
            case 'spring' : return quiz.quiz[2];
            case 'javascript' : return quiz.quiz[3];
            default : return quiz.quiz[0];
        }
    }


    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            if (newIndex < quiz.quiz[0].questions.length) {
                setQuiz((prevQuiz) => {
                    const updatedQuizArray = [...prevQuiz.quiz];
                    updatedQuizArray[0] = {
                        ...updatedQuizArray[0],
                        currentQuestion: newIndex
                    };
                    return {
                        ...prevQuiz,
                        quiz: updatedQuizArray
                    };
                });
                return newIndex;
            }
            return prevIndex; // Don't increment the index if we are at the last question
        });
    };

    const currentQuiz = getQuizFromshoisedTechnology();
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];


    return (
        <>
            <div className="w-full">
                {currentQuestion && (
                    <Question question={currentQuestion} onNextQuestion={handleNextQuestion} />
                )}
            </div>
        </>
    )
}