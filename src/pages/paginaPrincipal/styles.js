import styled from 'styled-components'
import { Container, cores, v } from '../../styles/variaveis'


export const Div = styled.div`
    
`;

export const DivHeader = styled.div`
    padding: ${v.xlSpacing} 30px;   
    background-image: linear-gradient(to right top, #051937, #0a1c38, #0f1e39, #142139, #18243a);
    color: ${cores.text_inverse};

    .container{
        ${Container}
    }

    .logomarca{
        text-align: center;

        img{
            width: 200px;
        }
    }
`;

export const DivHeaderContetnt = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${v.mdSpacing};
`;

export const HeraderText = styled.div`
    width: 50%;
    padding-right: ${v.mdSpacing};
    margin-top: 40px;
    position: relative;

    h1{
        font-weight: 700;
        font-size: 38px;
        letter-spacing: 0.01em;
        color: ${cores.text_inverse};
        margin-bottom: ${v.mdSpacing};
    }
    p{
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        color: ${cores.text_inverse};

        span b{
            color: ${cores.icons};
        }
    }
    

`;

export const HeaderForm = styled.div`
    color: ${cores.text_inverse};
    width: 50%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

export const BoxForm = styled.div`
    background-color: ${cores.backgroud};
    margin: 0 30px;
    padding: 40px 65px;
    border-radius: ${v.borderRadius};
`;


export const BolinhaWpp = styled.div`
    background-image: url(${item=>item.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: rotate(20deg);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 150px;
`;

export const Img = styled.img`
    width: 73%;
    margin: 0 auto -150px auto;
`;

export const InfoLogo = styled.div`
    position: absolute;
    bottom: 0;

    width: 100%;
    margin-top: 40px;
    background-color: ${cores.backgroud};
    border-radius: ${v.borderRadius};
    overflow: hidden;

    .header{
        background-color: ${cores.icons};
        padding: 10px 20px;
        text-align: center;
        p{
            color: ${cores.primary};
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
        }
    }
    .img{
        text-align: center;
    }
`;

export const H2titulo = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.01em;
    margin-bottom: ${v.xlSpacing};
`;

export const DivComoFunciona = styled.div`
    ${Container}
    padding: ${v.xlSpacing} 0;
`;
export const DivComoFuncionaPassos = styled.div`
    display: flex;
    justify-content: space-between;

    .linha{
        margin-top: 50px;
        overflow: hidden;
    }


    
`;
export const DivPasso = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 180px;

    span{
        font-weight: 900;
        font-size: 91px;
        letter-spacing: 1.75891px;
        color: ${cores.icons};
        margin-bottom: 10px;

        text-align: center;
    }

    p{
        margin-top: 20px;
        text-align: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1px;
    }

`;
export const BolaPassos = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: ${cores.primary};

    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        width: 85px;
        fill: ${cores.icons};
    }

    :hover{
        animation: passoIcon 0.5s ease-in-out forwards;
    }

    @keyframes passoIcon {
        0%{
            transform: translateY(0);
        }   
        100%{
            transform: translateY(-15px);
        }
    }
`

export const DivOqSaber = styled.div`
    ${Container}
    margin-bottom: ${v.xlSpacing};
`;

export const DivCards = styled.div`
    display: flex;
    justify-content: center;

    .card{
        text-align: center;
        width: 215px;
        margin: 0 20px;

        p{
            margin-top: 15px;
            
            font-weight: 500;
            font-size: 18px;
            letter-spacing: 1px;
        }
    }
`;

export const Card = styled.div`
    background-color: #D9D9D9;
    overflow: hidden;
    border-radius: ${v.borderRadius};

    .header{
        padding: 10px;
        background-color: ${cores.primary};
        color: ${cores.text_inverse};
        text-align: center;

        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
    }
    .icon{
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;