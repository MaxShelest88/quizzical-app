import React from 'react';
import classes from './AppButton.module.css'

const AppButton = ({children, ...props}) => {
	return (
		<button className={classes.appBtn}>
			{children}
		</button>
	);
};

export default AppButton;