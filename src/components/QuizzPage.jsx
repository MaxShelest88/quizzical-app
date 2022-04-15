import React, { useEffect, useState } from 'react';
import QuizzCard from './QuizzCard';
import AppButton from './ui/button/AppButton';
import answer from "./Answer";

const QuizzPage = ({ quizzes, setQuizzes }) => {

	const [isChecked, setIsChecked] = useState(false)

	function checkAnswers(){
		setQuizzes(prevQuizzes =>prevQuizzes.map(quiz=> {
				const newAnswers = []
				let updatedAnswer;
				quiz.answers?.forEach(answer => {
					if (answer.isSelected && answer.isCorrect) {
						updatedAnswer = {
							...answer,
							answered:true,
						}
						newAnswers.push(updatedAnswer)
					} else {
						updatedAnswer = {
							...answer,
							answered:false,
						}
						newAnswers.push(updatedAnswer)
					}
				})
				return {...quiz,
					answers: [...newAnswers]}
		}))
	}

	const quizzesItems = quizzes.map((quiz, index) =>
		<QuizzCard
			quiz={quiz}
			index={index}
			setQuizzes={setQuizzes}
			key={quiz.question}
		/>
	)

	return (
		<div className='quiz'>
			<div className="quiz__quistions">
				{quizzesItems}
			</div>
			<AppButton
				onClick={checkAnswers}
			>
				Check answers
			</AppButton>
		</div>
	);
};

export default QuizzPage;