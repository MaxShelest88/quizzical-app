import React, {useEffect, useState} from 'react';
import QuizzCard from './QuizzCard';
import AppButton from './ui/button/AppButton';

const QuizzPage = ({quizzes, setStart, updateQuizzes}) => {

    const [isChecked, setIsChecked] = useState(false)

    const quizzesItems = quizzes.map((quiz,index) =>
        <QuizzCard
            quiz={quiz}
            index={index}
            key={quiz.question}
            updateQuizzes={updateQuizzes}
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