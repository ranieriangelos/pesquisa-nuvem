import { useState } from "react";

export const useCheckBox = () =>{
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        setSelectedOptions(
            prevState =>
            prevState.includes(value)
                ? prevState.filter(option => option !== value) : [...prevState, value]
        );
    };
    return {selectedOptions, handleCheckboxChange}; 
}



