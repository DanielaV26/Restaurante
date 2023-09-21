'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container>
      <div className="w-full md:px-36">
        <hr />
        <div className="grid w-full justify-around sm:flex md:flex md:grid-cols-1">
          <div className="flex flex-col md:flex-row justify-around gap-14 mt-5 flex-wrap">
            <div>
              <Footer.Title title="Locales" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Av. Pajaritos 2973, Maipú, Santiago, RM.
                </Footer.Link>
                <Footer.Link href="#">
                  Av. Algarrobo 2158, Algarrobo, Valparaíso.
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Horario" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Lunes a Jueves 12:00h-23:00h
                </Footer.Link>
                <Footer.Link href="#">
                  Viernes a Domingo 12:00h-00:00h
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contacto" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  +569 3421 6587
                </Footer.Link>
                <Footer.Link href="#">
                  reservas@larustika.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Políticas de privacidad
                </Footer.Link>
                <Footer.Link href="#">
                  Términos y condiciones
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between justify-center">
          <Footer.Copyright
            by="La Rústika Pizzería. Todos los derechos reservados.™"
            href="#"
            year={2022}
          />
          <div className="mt-4 flex gap-5 sm:mt-0 sm:justify-center ml-auto">
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsWhatsapp}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}


