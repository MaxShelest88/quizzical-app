import React, {useEffect, useState} from 'react';
import Answer from './Answer';

const QuizzCard = ({ quiz, index, updateAllAnswers }) => {

	const [allCardAnswers, setAllCardAnswers] = useState([])

	const correctAnswer = quiz.correct_answer

	const incorrentAnswers = quiz.incorrect_answers

	const unmixedAnswers = [correctAnswer, ...incorrentAnswers].map((answer, index) => {
		return {
			id: index,
			answer,
			isSelected: false,
			isCorrect: false
		}
	})

	useEffect(()=>{
		setAllCardAnswers(unmixedAnswers.sort(() => Math.random() - 0.5))
	},[])

	function selectAnswer(id) {
		setAllCardAnswers(prevAllAnswers => {
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

	function checkAnswers() {
		setAllCardAnswers(prevCardAnswers => {
			const checkedAnswers =
				{
					index:index,
					checked:[]
				}
			prevCardAnswers.forEach(answer => {
				if (answer === correctAnswer && answer.isSelected) {
					const checkAnswer = {
						...answer,
						isCorrect:true
					}
					checkedAnswers.checked.push(checkAnswer)
				} else {
					checkedAnswers.checked.push(answer)
				}
			})
			updateAllAnswers(checkedAnswers, checkedAnswers.index)
		})
	}

	const answerItems = allCardAnswers.map((answer, index) => <Answer
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