import React, { useReducer } from 'react'

export default (reducer, actions, initialState) => {
    const Context = React.createContext();//We don't want to pass down information the classic way(Parent to Child) so we use Context to make passing information more eficient

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ state: state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}