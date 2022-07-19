import { createContext,useState } from 'react'

export const DireccionContext = createContext("");

export const DirContext = ({children}) =>{
    const [dirContext,setDirContext] = useState({});
    return (
        <DireccionContext.Provider value={{dirContext,setDirContext}}>
            {children}
        </DireccionContext.Provider>

    )
}
