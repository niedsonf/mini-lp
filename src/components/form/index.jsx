import { useContext, useEffect, useState } from 'react';
import * as C from './styled'

// context
import { Context } from '../../contexts/ContextGeral'
import { useNavigate } from 'react-router-dom';
import { ArrowRight, WhatsappLogo } from 'phosphor-react';
import toast from 'react-hot-toast'
import { MAKE } from '../../services/make'

import { Uploads } from '../uploads'

export const Form = () => {
    const { state } = useContext(Context)

    const navigate = useNavigate()

    const [ nome, setNome ] = useState('')
    const [ telefone, setTelefone ] = useState('')
    const [ email, setEmail ] = useState('')


    const handleEnvio = async (e) => {
        e.preventDefault();

        if(nome != '' && telefone != '' && email != ''){
            // const response = await MAKE.webhook(nome, telefone, email, state.logo.link)
            // console.log(response)

            navigate('/obrigado')
        } else{
            toast.error('Preencha todos os campos !')
        }
    }

    return(
        <C.Form onSubmit={handleEnvio}>
            <C.Label>Nome</C.Label>
            <C.Input type='text' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)}/>

            <C.Label>Número de WhatsApp <WhatsappLogo size={25} weight="fill" /></C.Label>
            <C.Input type='tel' placeholder='Número do WhatsApp' value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
            
            <C.Label>E-mail</C.Label>
            <C.Input type='email' placeholder='Ex: exemplo@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>

            <C.Label className='label-upload'>Adicione seu logo</C.Label>
            <Uploads />

            <C.Submit type='submit'> Iniciar meu orçamento <ArrowRight size={25} weight="bold" color='#fff' /> </C.Submit>
        </C.Form>
    )
}