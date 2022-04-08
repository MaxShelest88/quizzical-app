import React, { useState } from 'react';
import QuizzCard from './QuizzCard';
import AppButton from './ui/button/AppButton';

const QuizzPage = ({ quizzes, setStart }) => {

	const [allAnswers, setAllAnswers] = useState([])



	function collectQuistions() {
		const arr = []
		quizzes.forEach(element => {
			arr.push([element.correct_answer, ...element.incorrect_answers])
		});

		console.log(arr);
	}




	const quizzesItems = quizzes.map(quiz => <QuizzCard quiz={quiz} key={quiz.question} />
	)

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