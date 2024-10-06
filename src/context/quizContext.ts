import {createContext, useContext} from "react";

export const QuizContext = createContext(
    {
        quiz: [
            {
                id: 0,
                title: "Quiz 1",
                technology: "Java",
                currentQuestion: 0,
                score: 0,
                questions: [
                    {
                        id: 0,
                        question: "What is the capital of France?",
                        options: [
                            {id: 0, option: "Paris", isCorrect: true},
                            {id: 1, option: "London", isCorrect: false},
                            {id: 2, option: "Berlin", isCorrect: false},
                            {id: 3, option: "Madrid", isCorrect: false}
                        ]
                    }
                ]
            },
            {
                id: 0,
                title: "Quiz 1",
                technology: "JavaScript",
                currentQuestion: 0,
                score: 0,
                questions: [
                    {
                        id: 0,
                        question: "What is the capital of France?",
                        options: [
                            {id: 0, option: "Paris", isCorrect: true},
                            {id: 1, option: "London", isCorrect: false},
                            {id: 2, option: "Berlin", isCorrect: false},
                            {id: 3, option: "Madrid", isCorrect: false}
                        ]
                    }
                ]
            },
            {
                id: 0,
                title: "Quiz 1",
                technology: "Python",
                currentQuestion: 0,
                score: 0,
                questions: [
                    {
                        id: 0,
                        question: "What is the capital of France?",
                        options: [
                            {id: 0, option: "Paris", isCorrect: true},
                            {id: 1, option: "London", isCorrect: false},
                            {id: 2, option: "Berlin", isCorrect: false},
                            {id: 3, option: "Madrid", isCorrect: false}
                        ]
                    }
                ]
            }
            ],
        setQuiz: () => {
        }
    }
)


export function useQuizContext() {
    const {quiz, setQuiz} = useContext(QuizContext);
    if (!quiz) {
        throw new Error("useQuizContext must be used within a QuizProvider");
    }
    return {quiz, setQuiz};
}