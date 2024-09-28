
import { useContext, useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import MainComp from './components/MainComp'
import { appStateContext } from './helper/createContext'

function App() {
  const [isOpenScreenLoad, setIsOpenScreenLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenScreenLoad(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const myContex = useContext(appStateContext)
  return (
    <>
      {isOpenScreenLoad && myContex?.isInnerWidthMore768 === true ? <LoadingScreen isOpenScreenLoad={isOpenScreenLoad} /> : <MainComp />
      }
    </>
  )
}

export default App
