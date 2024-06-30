
import { useEffect, useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import MainComp from './components/MainComp'

function App() {
  const [isOpenScreenLoad, setIsOpenScreenLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenScreenLoad(false);
    }, 1500); // 3 seconds to show the div initially
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);
  return (
    <>
      {isOpenScreenLoad ? <LoadingScreen isOpenScreenLoad={isOpenScreenLoad} /> : <MainComp />
      }
    </>
  )
}

export default App
