import React from 'react';

const Button = ({label, click}) => {
    return (
        <button className={"py-1 px-6 bg-lime-600 text-white font-semibold rounded-full hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-75"} onClick={()=>click()}>{label}</button>
    );
};


export default Button;