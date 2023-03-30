import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Profile from './components/profile'
import Projects from './components/projects'

function App() {
  const [changeHeaderColor, setChangeHeaderColor] = useState(false)

  useEffect(function () {
    function scrollPosition() {
      if (window.scrollY > 10) {
        setChangeHeaderColor(true);
      } else {
        setChangeHeaderColor(false);
      }
    }

    window.addEventListener('scroll', scrollPosition);
  }, []);

  return (
    <>
      <Header scrollStatus={changeHeaderColor} language="pt-br" />
      <main>
        <Profile />
        <Projects />
      </main>
    </>
  )
}

export default App
