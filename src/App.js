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
		setQuizzes(res.data.results);
		console.log(res.data.results)
	}

	useEffect(() => {
		fetchQuizzes()
	}, [])

	const changeStart =() =>{
		setStart(prevState => !prevState)
	}
	
	return (
		<div className="app">
			{start ? <StartPage start={start} changeStart={changeStart} /> : <QuizzPage quizzes={quizzes} setStart={setStart} />}
		</div>
	);
}

export default App;
