
import { InputContainer } from "./styles";

const Input = ({ text, handleOnChange }) => {

    return (
        <InputContainer>
            <input value={text} onChange={handleOnChange} placeholder="Insira o repositório..." />
        </InputContainer> 
    )
}

export default Input