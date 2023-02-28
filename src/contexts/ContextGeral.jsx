import { createContext, useReducer } from 'react'

// reducer individual
import { initialInfoLogo, reducerInfoLogo } from '../reducers/infosLogo'

// valores iniciais
const initialState = {
    logo: initialInfoLogo
}

// criando CONTEXTO com seus valores
// state: onde ficam as variaveis de contexto
// dispatch: onde recebemos os dados
export const Context = createContext({
    state: initialState,
    dispatch: () => null
});

// reducer global
const mainReducer = ( state, action) => ({
    logo: reducerInfoLogo(state.logo, action)
})

// PROVIDER = "bolha de dados" provedor de dados
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}