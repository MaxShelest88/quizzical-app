import React, { useEffect, useState } from 'react';
import Answer from './Answer';


const QuizzCard = ({ quiz, index, setQuizzes}) => {


	function selectQuizzesAnswer(id) {
		setQuizzes(prevQuizzes =>prevQuizzes.map(quiz=> {
			if(quiz.id === index){
				const newAnswers = []
				let updatedAnswer;
				quiz.answers?.forEach(answer => {
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
				return {...quiz,
					answers: [...newAnswers]}
			} else {
				return quiz
			}
		}))
	}


	const answerItems = quiz.answers.map((answer, index) => <Answer
		answer={answer}
		key={index}
		selectAnswer={() => selectQuizzesAnswer(answer.id)}
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