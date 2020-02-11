import React from 'react';

const StyledTestButton = {
border: 'none',
backgroundColor: 'black',
color: 'black', 
padding: '14px 28px', 
cursor: 'pointer', 
fontSize: '14px'
}

export const TestButton =  ({ children }) => {
    return (<button style={StyledTestButton}>{children}</button>)
};