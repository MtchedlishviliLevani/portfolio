
import { useContext, useEffect } from 'react'
import MainComp from './components/MainComp'
import { appStateContext } from './helper/createContext'

function App() {
  const myContext = useContext(appStateContext)
  useEffect(() => {
    if (myContext?.isOpenNavigation) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      // Cleanup only when the component unmounts
      document.body.style.overflow = "";
    };
  }, [myContext?.isOpenNavigation])

  useEffect(() => {

  }, [])
  return (
    <MainComp />
  )
}

export default App
