import axios from 'axios';
import { useEffect, useState } from 'react'
import QuizzPage from './components/QuizzPage';
import StartPage from "./components/StartPage";
import "./styles/App.css"
import answer from "./components/Answer";

const API_URL = `https://opentdb.com/api.php?amount=5&type=multiple`


function App() {

	const [start, setStart] = useState(true)

	const [quizzes, setQuizzes] = useState([])

	const fetchQuizzes = async () => {
		const res = await axios.get(API_URL)
		setQuizzes(res.data.results.map((quiz, index)=>{return{...quiz, index, answered:false}}));
	}

	useEffect(() => {
		fetchQuizzes()
	}, [])

	useEffect(()=>{
		console.log(quizzes)
	}, [quizzes])

	const changeStart =() =>{
		setStart(prevState => !prevState)
	}

	function updateQuizzes(index){
		setQuizzes(prevQuizzes=>{
			prevQuizzes.map(quiz=>{

					return {...quiz, answered:true}

			})
		})
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
						setStart={setStart}
						updateQuizzes={updateQuizzes}
						/>}
		</div>
	);
}

export default App;
