import React, { useState } from 'react';
import QuizzCard from './QuizzCard';
import AppButton from './ui/button/AppButton';

const QuizzPage = ({ quizzes, setQuizzes, changeStart, fetchQuizzes }) => {

	const [checked, setChecked] = useState(false)

	function findAnsweredQuizzes () {
		let arr =[]
		quizzes.forEach(quiz=>{
			quiz.answers.forEach(answer=>answer.answered===true ? arr.push(quiz) : quiz)
		})
		return arr.length
	}

	function checkAnswers(){
		if (!checked){
			setQuizzes(prevQuizzes =>prevQuizzes.map(quiz=> {
				const newAnswers = []
				let updatedAnswer;
				quiz.answers?.forEach(answer => {
					if (answer.isSelected && answer.isCorrect) {
						updatedAnswer = {
							...answer,
							answered:true,
							isSelected:false
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
		setChecked(prevIsChecked => !prevIsChecked)
		}

	const quizzesItems = quizzes.map((quiz, index) =>
		<QuizzCard
			quiz={quiz}
			index={index}
			setQuizzes={setQuizzes}
			key={quiz.question}
		/>
	)

	function startNewGame(){
		changeStart()
		fetchQuizzes()
	}

	return (
		<div className='quiz'>
			<div className="quiz__quistions">
				{quizzesItems}
			</div>

			<div className="result">
				{
					!checked ? <AppButton
							onClick={checkAnswers}
						>
							Check answers
						</AppButton> :
						<>
							<div>You scored {findAnsweredQuizzes()}/{quizzes.length} correct answers</div>
							<AppButton
								onClick={startNewGame}
							>Play again</AppButton>
						</>
				}
			</div>
		</div>
	);
};

export default QuizzPage;