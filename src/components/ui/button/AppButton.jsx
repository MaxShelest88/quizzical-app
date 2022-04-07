import React from 'react';

const AppButton = ({children, ...props}) => {
	return (
		<button>
			{children}
		</button>
	);
};

export default AppButton;