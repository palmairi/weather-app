import React, {useEffect, useState} from 'react';

const InputText = ({value, setValue, label}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(()=>{
        setValue(inputValue);
    },[inputValue])


    return (
        <div className={"flex gap-4"}>
            <label htmlFor={label} className={"font-bold text-gray-600"}>{label}</label>
            <input className={"border border-gray-400 rounded-sm text-lime-700 outline-lime-600"} type="text" id={label} value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
        </div>
    );
};

export default InputText;