import React from 'react';
// import styled from 'styled-components/macro';

export const Button =  ({ bg, children}) => (
    <button style={{backgroundColor: bg}}>{children}</button>
    );