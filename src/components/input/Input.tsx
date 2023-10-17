import React, { ChangeEvent, FocusEvent } from 'react';

interface InputProps {
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
    invalid: boolean;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, onBlur, invalid, placeholder }) => {
    return (
        <input
            type={type}
            className={`w-full p-2 border ${invalid ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:border-blue-400`}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
        />
    );
};

export default Input;
