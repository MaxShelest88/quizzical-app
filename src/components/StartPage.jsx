import React from 'react';
import AppButton from './ui/button/AppButton';

const StartPage = ({changeStart}) => {
	return (
		<div className='start'>
			<div className='start__title'>Quizzical</div>
			<div className='start__subtitle'>Some description if needed</div>
			<AppButton
				onClick={changeStart}
				>
			Start quiz
		</AppButton>
		</div>
	);
};

export default StartPage;