import './App.css'
import FooterWithSocialMediaIcons from './components/Footer'
import { MainNavbar } from './components/MainNavbar'
import { MainRoutes } from './routes/MainRoutes'

function App() {

  return (
    <>
    <MainNavbar/>
    <MainRoutes/>
    <FooterWithSocialMediaIcons/>
    </>
  )
}

export default App