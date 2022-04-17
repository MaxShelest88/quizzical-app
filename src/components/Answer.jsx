import React from 'react';

const Answer = ({answer, selectAnswer}) => {
    return (
        <div
            className={`answer${
                answer.isSelected ? " selected" :
                    answer.answered && answer.isCorrect ? " answered" :
                        answer.answered !== null && !answer.answered && answer.isCorrect ? " mistaken" :
                            ""}`}
            dangerouslySetInnerHTML={{__html: answer.answer}}
            onClick={() => selectAnswer()}
        >
        </div>
    );
};

export default Answer;