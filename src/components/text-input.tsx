import React from 'react';

const TextInput:React.FC<{label: string, id: string, type?: string}> = ({label, id, type}) => {
    return (
        <div className={"w-full"}>
            <label className={"font-medium"} htmlFor={id}>
                {label}
            </label>
            <br/>
            <input className={"bg-gray-200 w-full p-2 rounded-xl"} type={type || 'text'} name={id} id={id} />
        </div>
    )
}

export default TextInput;