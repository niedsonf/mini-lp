import styled from "styled-components";
import { cores, btnReset, v } from '../../styles/variaveis'

export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const LabelFile = styled.label`
    background: ${cores.primary};
    border-radius: 20px;
    padding: 10px 20px;
    width: 100%;
    text-align: center;
    
    color: ${cores.text_inverse};
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;

    cursor: pointer;
`;

export const InputFile = styled.input`
    font-weight: bold;
    display: none;
   
`;

export const DivImg = styled.div`
    margin-top: 20px;
    background-color: ${cores.text_inverse};
    border-radius: 20px;
    padding: 10px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    animation: showImg 0.5s;

    img{
        width: 100px;
    }

    svg{
        cursor: pointer;
        :hover{
            animation: hoverTrash 0.5s forwards;
        }
    }

    @keyframes showImg {
        0%{
            transform: translateY(50px);
            opacity: 0;
        }
        100%{
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @keyframes hoverTrash {
        0%{
            transform: scale(1);
        }
        50%{
            transform: rotate(-0.05turn);
        }
        100%{
            transform: scale(1.5);
        }
    }
`;