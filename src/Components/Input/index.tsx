import { UseFormRegisterReturn } from "react-hook-form";
import { InputStyled } from "./style";

interface iInputProps {
    placeholder?: string;
    type: "text" | "email" | "password" | "number";
    id: string;
    label?: string;
    register?: UseFormRegisterReturn;
    error?: string;
    disabled: boolean;
}

const InputForm = ({type, id, label, placeholder, register, error , disabled}:iInputProps) => {
    return (
        <InputStyled>
            <fieldset>
                {label && <label htmlFor={id}>{label}</label>}
                <input type={type} id={id} placeholder={placeholder} {...register} disabled={disabled}/>
                {error ? <p>{error}</p> : ""} 
            </fieldset>  
        </InputStyled>
    )
}

export default InputForm;