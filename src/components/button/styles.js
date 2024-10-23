import styled from "styled-components"

export const ButtonContainer = styled.button`

    border-radius: 10px;
    border: none;
    height: 50px;
    width: 200px;
    padding: 0 20px;
    font-size: 18px;
    cursor: pointer;
    // font-weight: bold;
    text-transform: uppercase;
    transition: 0.35s ease;

    &:hover {
        background-color: #22272e;
        border: 1px solid #FAFAFA40;
        color: #FAFAFA;    
    }
`