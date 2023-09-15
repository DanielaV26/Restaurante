import { Accordion, AccordionItem } from "@nextui-org/react"
import { PizzaSvg } from "./PizzaSvg"
import { AcompanamientosSvg } from "./AcompanamientosSvg"
import { PostresSvg } from "./PostresSvg"
import { JugosSvg } from "./JugosSvg"
import { LimonadasSvg } from "./LimonadasSvg"
import { BebidasSvg } from "./BebidasSvg"
import { CervezasSvg } from "./CervezasSvg"


export const MenuAcordeon = () => {
  return (
    <div className="px-28 mt-10">
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Chung Miller"
        startContent={
          <PizzaSvg
          />
        }
        subtitle="Prueba nuestras exquisitas pizzas con masa a la piedra"
        title="Pizzas"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Rústica</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Margarita</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Jardín</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Berenjena</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Salmón</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Cielito Lindo</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Aurora Boreal</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Tormenta</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Sol de Verano</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
          </ul>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Janelle Lenard"
        startContent={
          <AcompanamientosSvg
            isBordered
            color="success"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        }
        subtitle="Disfruta tu pizza con ricos acompanamientos"
        title="Acompañamientos"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Papas fritas</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Papas fritas supremas</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Empanadas de queso</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
          </ul>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Zoey Lang"
        startContent={
          <PostresSvg
            isBordered
            color="warning"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
        }
        subtitle="Qué mejor que un postre para terminar."
        title="Postres"
      >
        {MenuAcordeon}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Zoey Lang"
        startContent={
          <JugosSvg
            isBordered
            color="warning"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
        }
        subtitle="Rico juguito"
        title="Jugos"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Mango</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Frutilla</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Frambuesa</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Naranja</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Piña</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Melón</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Maracuyá</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
          </ul>
        </div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Zoey Lang"
        startContent={
          <LimonadasSvg
            isBordered
            color="warning"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
        }
        subtitle="Rica limonada"
        title="Limonadas"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Clásica</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Menta</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Jengibre</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Menta-Jengibre</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
          </ul>
        </div>
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Zoey Lang"
        startContent={
          <BebidasSvg
            isBordered
            color="warning"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
        }
        subtitle="Rica bebidita"
        title="Bebidas"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Coca-Cola Original</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Coca-Cola Sin Azúcar</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Fanta Original</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Fanta Sin Azúcar</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Sprite Original</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Sprite Sin Azúcar</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
          </ul>
        </div>
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="Zoey Lang"
        startContent={
          <CervezasSvg
            isBordered
            color="warning"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
        }
        subtitle="Rica cervecita"
        title="Cervezas"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Botella</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Coca-Cola Sin Azúcar</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Fanta Original</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Fanta Sin Azúcar</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Sprite Original</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Sprite Sin Azúcar</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$20.95</span>
              </li>
          </ul>
        </div>
      </AccordionItem>
</Accordion>
</div>
  )
}
