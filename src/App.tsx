
import { useContext, useEffect } from 'react'
// import LoadingScreen from './components/LoadingScreen'
import MainComp from './components/MainComp'
import { appStateContext } from './helper/createContext'

function App() {
  const myContext = useContext(appStateContext)
  // const isLargeScreen = !!myContext?.isInnerWidthMore768
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
    <>
      {/* <div className="app-container">
        {isLargeScreen && <LoadingScreen />}
      </div> */}
      <MainComp />

    </>
  )
}

export default App
