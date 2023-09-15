import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Nosotros } from '../pages/Nosotros'
import { Reservas } from '../pages/Reservas'
import { Menu } from '../pages/Menu'
import { Blog } from '../pages/Blog'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservas" element={<Reservas/>} />
        <Route path="/blog" element={<Blog/>} />
    </Routes>
  )
}
