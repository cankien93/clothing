import React from 'react';

import {CustomButtonContainer} from './custom-button.style.jsx'

const CustomButton = ({children, ...props}) => (
        <CustomButtonContainer  {...props}>
            {children}
        </CustomButtonContainer>
)
export default CustomButton;