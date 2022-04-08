import React, {useEffect, useState} from 'react';
import Answer from './Answer';

const QuizzCard = ({ quiz }) => {

	const [allAnswers, setAllAnswers] = useState([])

	const [correctAnwer, setCorrectAnswer] = useState(quiz.correct_answer)

	const [incorrentAnswers, setIncorrentAnswers] = useState(quiz.incorrect_answers)

	const unmixedAnswers = [correctAnwer, ...incorrentAnswers].map((answer, index) => {
		return {
			id: index,
			answer,
			isSelected: false,
			isCorrect: answer===correctAnwer ? true : false
		}
	})

	useEffect(()=>{
		setAllAnswers(unmixedAnswers.sort(() => Math.random() - 0.5))
	},[])

	function selectAnswer(id) {
		setAllAnswers(prevAllAnswers => {
			const newAnswers = []
			let updatedAnswer;
			prevAllAnswers.forEach(answer => {
				if (answer.id === id) {
					updatedAnswer = {
						...answer,
						isSelected : !answer.isSelected
					}
					newAnswers.push(updatedAnswer)
				} else {
					 updatedAnswer = {
						...answer,
						isSelected: false
					}
					newAnswers.push(updatedAnswer)
				}
			})
			return newAnswers
		})
	}

	const answerItems = allAnswers.map((answer, index) => <Answer
		answer={answer}
		key={index}
		selectAnswer={() => selectAnswer(answer.id)}
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