import { useState } from 'react'
import './App.css'
import FooterWithSocialMediaIcons from './components/Footer'
import { MainNavbar } from './components/MainNavbar'
import { MainRoutes } from './routes/MainRoutes'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from './firebase/firebase'


function App() {

const [usuario, setUsuario] = useState(null)
const onLoginGoogle = () => {
  signInWithPopup(auth, googleProvider).then(({user})=>{
    console.log(user)
    setUsuario(user)
    alert("Inicio de sesión exitoso")
  }).catch((error)=>{
    console.log(error)
  alert("No se pudo iniciar sesión")
})
}

const onLogOut = () => {
  setUsuario(null)
}

  return (
    <>
    <MainNavbar onLoginGoogle={onLoginGoogle} usuario={usuario} onLogOut={onLogOut}/> 
    <MainRoutes/>
    <FooterWithSocialMediaIcons/>
    </>
  )
}

export default App
