
import { ButtonContainer } from "./styles";

const Button = ({ handleOnClick }) => {

    return (
        <ButtonContainer onClick={handleOnClick}>
            Buscar
        </ButtonContainer>
    )
}

export default Button