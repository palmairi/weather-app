import React from 'react';

const Button = ({label, click}) => {
    return (
        <button onClick={()=>click()}>{label}</button>
    );
};

export default Button;