import { useState, useContext } from 'react'
import { APIimg } from '../../services/uploadLogo'


import { Context } from '../../contexts/ContextGeral'

import * as C from './styled'
import { Trash } from 'phosphor-react'

export const Uploads = () => {
    const { state, dispatch } = useContext(Context)
    const [filename, setFileName] = useState('Clique aqui e anexe seu logo')

    const handleUpload = async (e) => {
        
        
        const file = e.target.files[0]
        console.log(file)

        if(!file) return;
        setFileName('Guardando sua imagem...')

        let formData = new FormData();
        formData.append("file", file);

        const response = await APIimg.upload(formData)

        console.log(response);
        
        dispatch({
            type: 'LINK_LOGO',
            payload: {
                link: response.location,
                name: response.key,
                nameArq: response.originalname
            }
        })

        setFileName('Clique aqui e anexe seu logo')
    }

    const handleDelete = (refe) => {
        
        dispatch({
            type: 'LINK_LOGO',
            payload: {
                link: '',
                name: '',
                nameArq: ''
            }
        })
    }

    return(
        <C.Div>
            <C.LabelFile>
                {filename}
                <C.InputFile type='file' onChange={(e) => handleUpload(e)} />
                
            </C.LabelFile>
            {state.logo.link != '' && (
                <C.DivImg>
                    <img src={state.logo.link} alt="logo_cliente" />
                    <Trash onClick={() => handleDelete(state.logo.nameArq)} size={35} weight="fill"/>
                </C.DivImg>
            )}
            
        </C.Div>
    )
}