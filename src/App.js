import axios from 'axios';
import { useEffect, useState } from 'react'
import QuizzPage from './components/QuizzPage';
import StartPage from "./components/StartPage";
import "./styles/App.css"

const API_URL = `https://opentdb.com/api.php?amount=5&type=multiple`


function App() {

	const [start, setStart] = useState(true)

	const [quizzes, setQuizzes] = useState([])

	const fetchQuizzes = async () => {
		const res = await axios.get(API_URL)
		setQuizzes(res.data.results.map((quiz,index) => {
			return {
				...quiz,
				answers: [...quiz.incorrect_answers, quiz.correct_answer]
					.map((answer, index) => {
						return {
							id: index,
							answer,
							isSelected: false,
							isCorrect: answer === quiz.correct_answer,
							answered: null
						}
					})
					.sort(() => Math.random() - 0.5),
				answered: false,
				id:index
			}
		}));
	}

	useEffect(() => {
		fetchQuizzes()
	}, [])

	console.log(quizzes)


	const changeStart =() =>{
		setStart(prevState => !prevState)
	}

	
	return (
		<div className="app">
			{
				start ?
					<StartPage
						start={start}
						changeStart={changeStart} /> :
					<QuizzPage
						quizzes={quizzes}
						setQuizzes={setQuizzes}
						fetchQuizzes={fetchQuizzes}
						changeStart={changeStart}
						/>}
		</div>
	);
}

export default App;
