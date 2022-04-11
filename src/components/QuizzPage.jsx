import React, {useEffect, useState} from 'react';
import QuizzCard from './QuizzCard';
import AppButton from './ui/button/AppButton';

const QuizzPage = ({quizzes, setStart}) => {

	const [isChecked, setIsChecked] = useState(false)

	const [quizzesCheck, setQuizzesCheck] = useState(()=>{
		return quizzes.map(quiz=>{return {...quiz, answered:false}})
	})


	const quizzesItems = quizzesCheck.map(quiz =>
		<QuizzCard
		quiz={quiz}
		key={quiz.question}
		setQuizzesCheck={setQuizzesCheck}
		/>
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