import React from 'react';

const Answer = (props) => {
	return (
		<div
			className={`answer${props.selectedAnswer ? " selected" : ""}`} dangerouslySetInnerHTML={{__html:props.answer}}
			onClick={()=>props.selectAnswer()}
		>
		</div>
	);
};

export default Answer;