import React, {useEffect, useState} from 'react';
import Answer from './Answer';
import answer from "./Answer";

const QuizzCard = ({ quiz, ...props }) => {

	const [allAnswers, setAllAnswers] = useState([])

	const correctAnswer = quiz.correct_answer

	const incorrentAnswers = quiz.incorrect_answers

	const unmixedAnswers = [correctAnswer, ...incorrentAnswers].map((answer, index) => {
		return {
			id: index,
			answer,
			isSelected: false,
			isCorrect: false
		}
	})

	useEffect(()=>{
		setAllAnswers(unmixedAnswers.sort(() => Math.random() - 0.5))
	},[])

	useEffect(()=>{
		allAnswers.forEach(answer=>{
			if (answer.isSelected && answer.isCorrect){
				props.updateQuizzes(props.index)
			}
		})
	},[allAnswers])


	function selectAnswer(id) {
		setAllAnswers(prevAllAnswers => {
			const newAnswers = []
			let updatedAnswer;
			prevAllAnswers.forEach(answer => {
				if (answer.id === id) {
					updatedAnswer = {
						...answer,
						isSelected : !answer.isSelected
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
			return newAnswers
		})
	}

	function clickHandle(id) {
		selectAnswer(id)
		checkAnswers()
	}

	function checkAnswers() {
		if (quiz.index === props.index) {
			setAllAnswers(prevAllAnswers => {
				const checkedAnswers = []
				prevAllAnswers.forEach(answer => {
					if (answer.answer===correctAnswer) {
						const checkAnswer = {
							...answer,
							isCorrect:true
						}
						checkedAnswers.push(checkAnswer)
					} else {
						checkedAnswers.push(answer)
					}
				})
				return checkedAnswers
			})
		}

	}

	const answerItems = allAnswers.map((answer, index) => <Answer
		answer={answer}
		key={index}
		selectAnswer={() => clickHandle(answer.id)}
	/>)

	return (
		<div className='quizzcard'>
			<div className="quizzcard__quastion" dangerouslySetInnerHTML={{__html:quiz.question}}>
			</div>
			<div className="quizzcard__answers">
				{answerItems}
			</div>
		</div>
	);
};

export default QuizzCard;