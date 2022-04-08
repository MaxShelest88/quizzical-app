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

	function changeStart(){
		setStart(prevStart=>!prevStart)
	}

	useEffect(() => {
		fetchQuizzes()
	}, [])
	
	return (
		<div className="app">
			{start ? <StartPage start={start} changeStart={changeStart} /> : <QuizzPage quizzes={quizzes} changeStart={changeStart} />}
		</div>
	);
}

export default App;
