import { ReactNode, useEffect, useState } from "react"
import { appStateContext } from "../helper/createContext"


function Context({ children }: { children: ReactNode }) {
    const [isInnerWidthMore768, setIsInnerWidthMore768] = useState<boolean>(window.innerWidth > 767)
    const [isOpenNavigation, setIsOpenNavigation] = useState<boolean>(false)


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setIsInnerWidthMore768(true)
            } else {
                setIsInnerWidthMore768(false)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])


    return (
        <appStateContext.Provider value={{ isInnerWidthMore768, setIsInnerWidthMore768, isOpenNavigation, setIsOpenNavigation }}>
            {children}
        </appStateContext.Provider>
    )
}



export default Context
