import styled from 'styled-components'
import { cores, btnReset, v } from '../../styles/variaveis'

export const Form = styled.form`

`;

export const Input = styled.input`
    background: #FDFDFD;
    border: 1px solid #767676;
    border-radius: 20px;
    padding: 10px 20px;

    width: 100%;

    ::placeholder{
        font-weight: 700;
        font-size: 15px;
        letter-spacing: 1px;
        color: #D9D9D9;
    }
`;

export const InputFile = styled.input`
    background: ${cores.text_inverse};
    border-radius: 20px;
    padding: 10px 20px;

    width: 100%;

    ::placeholder{
        font-weight: 700;
        font-size: 15px;
        letter-spacing: 1px;
        color: #D9D9D9;
    }

`;

export const Label = styled.label`
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;

    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;

    color: ${cores.primary};
    svg{
        fill: ${cores.primary};
        margin-left: 5px;
    }

`;

export const Submit = styled.button`
    ${btnReset}
    cursor: pointer;

    margin-top: ${v.lgSpacing};
    width: 100%;

    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        margin-left: 10px;
    }
    

    color: ${cores.text_inverse};
    background-color: ${cores.cta};
    padding: 10px 20px;
    border-radius: ${v.borderRadius};
`;