import { ReactNode, useEffect, useState } from "react"
import { appStateContext } from "../helper/createContext"


function Context({ children }: { children: ReactNode }) {
    const [isHiddenNavigation, setIsHiddenNavigations] = useState(window.innerWidth > 767)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setIsHiddenNavigations(true)
            } else {
                setIsHiddenNavigations(false)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            removeEventListener("resize", handleResize)
        }
    }, [])


    return (
        <appStateContext.Provider value={{ isHiddenNavigation, setIsHiddenNavigations }}>
            {children}
        </appStateContext.Provider>
    )
}



export default Context
