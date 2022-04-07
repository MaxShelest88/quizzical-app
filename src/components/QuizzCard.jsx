import React, {useEffect, useState} from 'react';
import Answer from './Answer';

const QuizzCard = ({ quiz }) => {

	const [selectedAnswer, setSelectedAnswer] = useState(false)

	function selectAnswer(){
		setSelectedAnswer(prevSelect=>!prevSelect)
	}

	const [quizAnswers, setQuizAnswers] = useState([])

	useEffect(()=>{
		setQuizAnswers([quiz.correct_answer, ...quiz.incorrect_answers].sort(() => Math.random() - 0.5))
	},[])



	const answerItems = quizAnswers.map((answer, index) => <Answer
		setSelectedAnswer={setSelectedAnswer}
		selectedAnswer={selectedAnswer}
		answer={answer}
		key={index}
		selectAnswer={selectAnswer}
	/>)

	return (
		<div className='quizzcard'>
			<div className="quizzcard__quastion" dangerouslySetInnerHTML={{__html:quiz.question}}>
			</div>
			<div className="quizzcard__answers">
				{answerItems}
			</div>
		</div>
	);
};

export default QuizzCard;