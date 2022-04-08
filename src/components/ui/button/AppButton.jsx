import React from 'react';
import classes from './AppButton.module.css'

const AppButton = ({children, ...props}) => {

	console.log(props.onClick)
	return (
		<button
			className={classes.appBtn}
			onClick={props.onClick}
		>
			{children}
		</button>
	);
};

export default AppButton;