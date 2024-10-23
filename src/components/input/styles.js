import styled from "styled-components"

export const InputContainer = styled.div`

    height: 50px;
    width: 600px;
    border: none;
    margin: 20px;

    input {
            border-radius: 20px;
            border: 1px solid #FAFAFA40;
            background: transparent;
            height: inherit;
            width: 100%;
            padding: 0 20px;
            color: #FFFFFF;
            font-size: 20px;

            &:focus {
                outline: none;
            }
            
            &::placeholder {
                font-size: 14px;
            }
        }
`