import * as C from './styles'
import logoSB from '../../assets/logobranca.svg'

import consultor from '../../assets/consultor.png'
import infoLogo from '../../assets/infologo.png'

import Passo01 from '../../components/svg/passos'
import Passo2 from '../../components/svg/passo02'
import Passo3 from '../../components/svg/passo03'
import Linha from '../../components/svg/linha'
import Bag from '../../components/svg/bag'
// import Calen from '../../components/svg/calendario'

// components
import { Form } from '../../components/form'

export const Home = () => {

    return(
        <C.Div>
            <C.DivHeader>
                <div className='container'>
                    <div className='logomarca'>
                        <img src={logoSB} alt="logo" />
                    </div>
                    <C.DivHeaderContetnt>
                        <C.HeraderText>
                            
                            <div>
                                <h1>
                                    Bonés Personalizados de alta qualidade com a marca da sua empresa
                                </h1>
                                <p>
                                    Já fabricamos mais de <span> <b>3 milhões de bonés personalizados</b> </span> com a marca de mais de 35 mil empresas de todo Brasil!
                                </p>
                            </div>

                            <C.InfoLogo>
                                <div className='header'>
                                    <p>
                                        Anexe seu logo, receba o modelo & faça o seu pedido imediatamente!
                                    </p>
                                </div>
                                <div className='img'>
                                    <img src={infoLogo} alt="info logo" />
                                </div>
                            </C.InfoLogo>
                          
                        </C.HeraderText>
                        <C.HeaderForm>
                            <C.Img src={consultor}/>
                            <C.BoxForm>
                                {/* <C.BolinhaWpp url={bolinha}>
                                    oi
                                </C.BolinhaWpp> */}
                                <Form />
                            </C.BoxForm>
                        </C.HeaderForm>
                    </C.DivHeaderContetnt>
                </div>
            </C.DivHeader>
            <C.DivComoFunciona>
                <C.H2titulo>Como funciona para pedir?</C.H2titulo>
                <C.DivComoFuncionaPassos>
                    <C.DivPasso>
                        <span> 1 </span>
                        <C.BolaPassos>
                            <Passo01 />
                        </C.BolaPassos>
                        <p>
                            Preencha o formulário aqui no site
                        </p>
                    </C.DivPasso>
                    <div className='linha'>
                        <Linha />
                    </div>
                    <C.DivPasso>
                        <span> 2 </span>
                        <C.BolaPassos>
                            <Passo2 />
                        </C.BolaPassos>
                        <p>
                            Siga os passos para criar o seu modelo
                        </p>
                    </C.DivPasso>
                    <div className='linha'>
                        <Linha />
                    </div>
                    <C.DivPasso>
                        <span> 3 </span>
                        <C.BolaPassos>
                            <Passo3 />
                        </C.BolaPassos>
                        <p>
                            Te enviaremos via WhatsApp o seu orçamento!
                        </p>
                    </C.DivPasso>
                </C.DivComoFuncionaPassos>
            </C.DivComoFunciona>
            <C.DivOqSaber>
                <C.H2titulo> O que preciso saber? </C.H2titulo>
                <C.DivCards>
                    <div className='card'>
                         <C.Card>
                            <div className='header'>
                                Pedido <br /> mínimo
                            </div>
                            <div className='icon'>
                                <Bag />
                            </div>
                        </C.Card>
                        <p>A partir de 30 unidades idênticas</p>
                    </div>
                    <div className='card'>
                        <C.Card>
                            <div className='header'>
                                Pedido <br /> mínimo
                            </div>
                            <div className='icon'>
                                <Bag />
                            </div>
                        </C.Card>
                        <p>A partir de 07 dias úteis</p>
                    </div>
                    <div className='card'>
                        <C.Card>
                            <div className='header'>
                                Pedido <br /> mínimo
                            </div>
                            <div className='icon'>
                                <Bag />
                            </div>
                        </C.Card>
                        <p>PIX, Boleto ou cartão</p>
                    </div>
                </C.DivCards>
            </C.DivOqSaber>
        </C.Div>
    )
}