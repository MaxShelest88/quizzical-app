import React, { useEffect, useState } from 'react';
import QuizzCard from './QuizzCard';
import AppButton from './ui/button/AppButton';

const QuizzPage = ({ quizzes, setQuizzes }) => {

	const [isChecked, setIsChecked] = useState(false)

	const [allAnswers, setAllAnswers] = useState(quizzes.map(quiz=>quiz.answers))

	console.log(allAnswers)

	const quizzesItems = quizzes.map((quiz, index) =>
		<QuizzCard
			quiz={quiz}
			index={index}
			setQuizzes={setQuizzes}
			key={quiz.question}
			quizzes={quizzes}
			updateAllAnswers={updateAllAnswers}
		/>
	)

	function updateAllAnswers(answer){
		setAllAnswers(prevAllAnswers=>prevAllAnswers.map(item=>{
			if(item.index === answer.index){
				return {...answer}
			}
			return item
		}))
	}

	return (
		<div className='quiz'>
			<div className="quiz__quistions">
				{quizzesItems}
			</div>
			<AppButton>
				Check answers
			</AppButton>
		</div>
	);
};

export default QuizzPage;