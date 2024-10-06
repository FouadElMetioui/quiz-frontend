import './App.css';
import {Home} from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import {QuizContext} from "./context/quizContext";
import {Quiz} from "./components/Quiz";
import {SubmitQuiz} from "./components/SubmitQuiz";
import {getData} from "./data/data";
import {NotFound} from "./components/NotFound";


function App() {


    const [quiz, setQuiz] = useState(getData());
    return (
        <div className="App">
            <Router>
                <QuizContext.Provider value={{quiz, setQuiz}}>
                    <Routes>
                        <Route exact path="/quiz" element={<Home/>}/>
                        <Route exact path="/quiz/:technology" element={<Quiz/>}/>
                        <Route exact path="/quiz/:technology/submit" element={<SubmitQuiz/>}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </QuizContext.Provider>
            </Router>
        </div>
    );
}

export default App;
