import React, {useEffect, useState} from 'react';

const InputText = ({value, setValue, label}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(()=>{
        setValue(inputValue);
    },[inputValue])


    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="text" id={label} value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
        </div>
    );
};

export default InputText;