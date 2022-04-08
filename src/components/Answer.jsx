import React from 'react';

const Answer = (props) => {
	return (
		<div
			className={`answer${props.answer.isSelected ? " selected" : ""}`} dangerouslySetInnerHTML={{__html:props.answer.answer}}
			onClick={()=>props.selectAnswer()}
		>
		</div>
	);
};

export default Answer;