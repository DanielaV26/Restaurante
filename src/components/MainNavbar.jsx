import { Link } from "react-router-dom";
import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import { LogoTradicion } from "./LogoTradicion";

export const MainNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>
      <Link className="flex justify-center items-center gap-3" to="/">
        <LogoTradicion/>
        <p className="font-bold text-inherit">La Rústika</p>
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
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150"
            />
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
    </Navbar>
  );
};
