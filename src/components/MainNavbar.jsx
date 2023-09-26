import { Link } from "react-router-dom";
import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    button,
} from "@nextui-org/react";
import { LogoTradicion } from "./LogoTradicion";
import { useState } from "react";
import { LoginModal } from "./LoginModal";

export const MainNavbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <Navbar className="h-28" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
      <Link className="flex justify-center items-center gap-3" to="/">
        <LogoTradicion/>
        <p className="body-font font-praise text-4xl">La Rústika</p>
      </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to="/nosotros">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="/menu" aria-current="page" color="secondary">
            Menú
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/blog">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/reservas">
            Reservas
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        
        <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen?"Close menu":"Open menu"}/>
        
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <>
            {
              user?
              <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150"
            />
            :<LoginModal/>
            }
            
            </>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Sesión iniciada como</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="team_settings">Configuración</DropdownItem>
            <DropdownItem key="configurations">Mis reservas</DropdownItem>
            <DropdownItem key="logout" color="danger">Cerrar sesión</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link to ="/" onClick={() => setIsMenuOpen(false)} className="w-full text-center mx-auto p-4" size="lg">
          Home
          </Link>
          <hr />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to ="/nosotros" onClick={() => setIsMenuOpen(false)}className="w-full text-center mx-auto p-4" size="lg">
          Nosotros
          </Link>
          <hr />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to ="/menu" onClick={() => setIsMenuOpen(false)} className="w-full text-center mx-auto p-4" size="lg">
          Menú
          </Link>
          <hr />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to ="/blog" onClick={() => setIsMenuOpen(false)} className="w-full text-center mx-auto p-4" size="lg">
          Blog
          </Link>
          <hr />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to ="/reservas" onClick={() => setIsMenuOpen(false)} className="w-full text-center mx-auto p-4" size="lg">
          Reservas
          </Link>
          <hr />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
