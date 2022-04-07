import React from 'react';
import QuizzCard from './QuizzCard';

const QuizzPage = ({quizzes}) => {

	const quizzesItems = quizzes.map(quiz => <QuizzCard quiz={quiz} key={quiz.question}/>
	)

	return (
		<div className='quiz'>
			{quizzesItems}
		</div>
	);
};

export default QuizzPage;