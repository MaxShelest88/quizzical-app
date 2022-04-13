import React, { useEffect, useState } from 'react';
import Answer from './Answer';
import answer from "./Answer";

const QuizzCard = ({ quiz, updateAllAnswers}) => {

	const [answers, setAnswers] = useState(quiz.answers)



	// const [allAnsweres, setAllAnsweres] = useState([])

	// const correctAnswer = quiz.correct_answer

	// const incorrentAnswers = quiz.incorrect_answers


	// useEffect(() => {
	// 	const unmixedAnswers = [correctAnswer, ...incorrentAnswers].map((answer, index) => {
	// 		return {
	// 			id: index,
	// 			answer,
	// 			isSelected: false,
	// 			isCorrect: answer === correctAnswer ? true : false,
	// 			answered: false
	// 		}
	// 	})
	// 	setAllAnsweres(unmixedAnswers.sort(() => Math.random() - 0.5))
	// }, [])


	function selectAnswer(id) {
		setAnswers(prevAnswers => {
			const newAnswers = []
			let updatedAnswer;
			quiz.answers.forEach(answer => {
				if (answer.id === id) {
					updatedAnswer = {
						...answer,
						isSelected: !answer.isSelected
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


	function clickHandle(id) {
		selectAnswer(id)
	}


	const answerItems = answers.map((answer, index) => <Answer
		answer={answer}
		key={index}
		selectAnswer={() => clickHandle(answer.id)}
	/>)

	return (
		<div className='quizzcard'>
			<div className="quizzcard__quastion" dangerouslySetInnerHTML={{ __html: quiz.question }}>
			</div>
			<div className="quizzcard__answers">
				{answerItems}
			</div>
		</div>
	);
};

export default QuizzCard;