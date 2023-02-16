import { createContext, useState } from "react";

const ContextManipulation = createContext({});

export const Context = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    return (
        <ContextManipulation.Provider value={{ sidebarVisible, setSidebarVisible}}>
            {children}
        </ContextManipulation.Provider>
    )
}

export default ContextManipulation;