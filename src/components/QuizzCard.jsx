import React from 'react';
import Answer from './Answer';

const QuizzCard = ({ quiz }) => {

	const quizAnswers = [quiz.correct_answer, ...quiz.incorrect_answers]

	quizAnswers.sort(() => Math.random() - 0.5)

	const answerItems = quizAnswers.map((answer, index) => <Answer answer={answer} key={index}/>)

	return (
		<div className='quizzcard'>
			<div className="quizzcard__quastion">
				{quiz.question}
			</div>
			<div className="quizzcard__answers">
				{answerItems}
			</div>
		</div>
	);
};

export default QuizzCard;