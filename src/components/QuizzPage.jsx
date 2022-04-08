import React from 'react';
import QuizzCard from './QuizzCard';
import AppButton from './ui/button/AppButton';

const QuizzPage = ({quizzes}) => {

	const quizzesItems = quizzes.map(quiz => <QuizzCard quiz={quiz} key={quiz.question}/>
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