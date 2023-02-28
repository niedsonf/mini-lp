export const initialInfoLogo = {
    link: '',
    name: '',
    nameArq: ''
}

export const reducerInfoLogo = (state, action) => {

    switch (action.type) {
        case 'LINK_LOGO':
            return{ ...state, 
                link: action.payload.link,
                name: action.payload.name,
                nameArq: action.payload.nameArq 
            }

        default:
            return state
    }

}