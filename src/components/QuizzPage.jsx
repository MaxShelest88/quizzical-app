import React, { useState } from 'react';
import QuizzCard from './QuizzCard';
import AppButton from './ui/button/AppButton';
import answer from "./Answer";

const QuizzPage = ({ quizzes, setStart }) => {

	const [allAnswers, setAllAnswers] = useState(collectQuestions())

	console.log(allAnswers)

	function collectQuestions() {
		const arr = []
		quizzes.forEach(element => {
			arr.push([element.correct_answer, ...element.incorrect_answers])
		});
		return arr
	}

	function updateAllAnswers(newAnswers, index){
		setAllAnswers(prevAllAnswers=>prevAllAnswers.map(answers=>{
			if(index===answers.index){
				return [...newAnswers]
			} else {
				return  answers
			}
		}))

	}

	const quizzesItems = quizzes.map((quiz, index)=> <QuizzCard quiz={quiz} updateAllAnswers={updateAllAnswers} index={index} key={quiz.question} />
	)

	return (
		<div className='quiz'>
			<div className="quiz__quistions">
				{quizzesItems}
			</div>
			<AppButton >
				Check answers
			</AppButton>
		</div>
	);
};

export default QuizzPage;