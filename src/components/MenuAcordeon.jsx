import { Accordion, AccordionItem } from "@nextui-org/react"
import { PizzaSvg } from "./PizzaSvg"
import { AcompanamientosSvg } from "./AcompanamientosSvg"
import { PostresSvg } from "./PostresSvg"
import { JugosSvg } from "./JugosSvg"
import { LimonadasSvg } from "./LimonadasSvg"
import { BebidasSvg } from "./BebidasSvg"
import { CervezasSvg } from "./CervezasSvg"
import { BebidasCalientesSvg } from "./BebidasCalientesSvg"


export const MenuAcordeon = () => {
  return (
    <div className="md:px-28 mt-10 font-semibold">
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Chung Miller"
        startContent={
          <PizzaSvg
          />
        }
        subtitle="Nuestra especialidad son las pizzas a la piedra."
        title="Pizzas"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Rústica</p>
                <p className="text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, queso de cabra, aceitunas, tocino, queso parmesano y orégano.</p>
              </div>
              <span className="text-xl">$13.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Margarita</p>
                <p className="text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$12.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Jardín</p>
                <p className="text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, tomate fresco, rúcula, berenjena, pimiento, ajo y aceite de oliva.</p>
              </div>
              <span className="text-xl">$13.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Berenjena</p>
                <p className="text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, berenjena, queso parmesano y un toque de miel.</p>
              </div>
              <span className="text-xl">$14.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Salmón</p>
                <p className="text-sm text-zinc-500 italic">Masa a la piedra, queso mozzarella, salmón, pesto, ricotta y rúcula.</p>
              </div>
              <span className="text-xl">$14.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Cielito Lindo</p>
                <p className="text-sm text-zinc-500 italic text-left">Masa a la piedra, salsa pomodoro, queso mozzarella, aceitunas, tomate cherry, choclo, cebolla caramelizada, pimientos y choricillo.</p>
              </div>
              <span className="text-xl">$12.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Aurora Boreal</p>
                <p className="text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, champiñón, aceitunas y tocino.</p>
              </div>
              <span className="text-xl">$13.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Tormenta</p>
                <p className="text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, doble queso mozzarella, doble pepperoni.</p>
              </div>
              <span className="text-xl">$12.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Sol de Verano</p>
                <p className="text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, tomate cherry, rúcula y jamón serrano.</p>
              </div>
              <span className="text-xl">$12.500</span>
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
        subtitle="Disfruta tu pizza con ricos acompanamientos."
        title="Acompañamientos"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Papas fritas</p>
                <p className="text-sm text-zinc-500">Papas fritas caseras.</p>
              </div>
              <span className="text-xl">$4.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Papas fritas supremas</p>
                <p className="text-sm text-zinc-500">Papas fritas, carne molida, tomate picado, cebollín, salsa de queso y salsa de yogurt.</p>
              </div>
              <span className="text-xl">$6.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Empanadas de queso</p>
                <p className="text-sm text-zinc-500">Empanadas fritas rellenas con queso.</p>
              </div>
              <span className="text-xl">$4.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Pollo apanado</p>
                <p className="text-sm text-zinc-500">8 Pollos apanados más salsa de la casa.</p>
              </div>
              <span className="text-xl">$5.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Salsa Pomodoro</p>
                <p className="text-sm text-zinc-500">Salsa de tomate.</p>
              </div>
              <span className="text-xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Salsa de Ajo</p>
                <p className="text-sm text-zinc-500">Salsa de Ajo.</p>
              </div>
              <span className="text-xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Salsa Mostaza-Miel</p>
                <p className="text-sm text-zinc-500">Salsa de mostaza y miel.</p>
              </div>
              <span className="text-xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Salsa Barbecue</p>
                <p className="text-sm text-zinc-500">Salsa Barbecue.</p>
              </div>
              <span className="text-xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Salsa Pesto</p>
                <p className="text-sm text-zinc-500">Salsa de Pesto.</p>
              </div>
              <span className="text-xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Salsa de Ají</p>
                <p className="text-sm text-zinc-500">Salsa de Ají.</p>
              </div>
              <span className="text-xl">$850</span>
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
        subtitle="Qué mejor que un toque dulce."
        title="Postres"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Rollos de Canela</p>
                <p className="text-sm text-zinc-500">8 Rollos acompañados de nuestra exquisita salsa de canela y glaseado.</p>
              </div>
              <span className="text-xl">$5.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Brownie de Chocolate</p>
                <p className="text-sm text-zinc-500">Brownie de Chocolate.</p>
              </div>
              <span className="text-xl">$2.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Brownie de Arándanos</p>
                <p className="text-sm text-zinc-500">Brownie de Arándanos.</p>
              </div>
              <span className="text-xl">$2.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Banana Split</p>
                <p className="text-sm text-zinc-500">Plátano, helado de vainilla, chocolate y fresa, crema chantilly, salsa de chocolate, frutos secos, cereza al marrasquino.</p>
              </div>
              <span className="text-xl">$3.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Pie de Limón</p>
                <p className="text-sm text-zinc-500">Trozo de Pie de Limón.</p>
              </div>
              <span className="text-xl">$4.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Kuchen de Manzana</p>
                <p className="text-sm text-zinc-500">Trozo de Kuchen de Manzana.</p>
              </div>
              <span className="text-xl">$4.500</span>
              </li>
          </ul>
        </div>
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
        subtitle="Conoce nuestros diferentes sabores de jugos."
        title="Jugos"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Mango</p>
                <p className="text-sm text-zinc-500">Jugo natural de Mango.</p>
              </div>
              <span className="text-xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Frutilla</p>
                <p className="text-sm text-zinc-500">Jugo natural de Frutilla.</p>
              </div>
              <span className="text-xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Frambuesa</p>
                <p className="text-sm text-zinc-500">Jugo natural de Frambuesa.</p>
              </div>
              <span className="text-xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Naranja</p>
                <p className="text-sm text-zinc-500">Jugo natural de Naranja.</p>
              </div>
              <span className="text-xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Piña</p>
                <p className="text-sm text-zinc-500">Jugo natural de Piña.</p>
              </div>
              <span className="text-xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Melón</p>
                <p className="text-sm text-zinc-500">Jugo natural de Melón.</p>
              </div>
              <span className="text-xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Maracuyá</p>
                <p className="text-sm text-zinc-500">Jugo natural de Maracuyá.</p>
              </div>
              <span className="text-xl">$3.500</span>
              </li>
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
        subtitle="Prueba nuestras refrescantes limonadas."
        title="Limonadas"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Clásica</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$3.600</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Menta</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$3.600</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Jengibre</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$3.600</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Menta-Jengibre</p>
                <p className="text-sm text-zinc-500">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-xl">$3.600</span>
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
        subtitle="Variedad de bebidas con y sin azúcar."
        title="Bebidas"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Coca-Cola Original</p>
                <p className="text-sm text-zinc-500">Vaso Coca-Cola Original.</p>
              </div>
              <span className="text-xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Coca-Cola Sin Azúcar</p>
                <p className="text-sm text-zinc-500">Vaso Coca-Cola Sin Azúcar.</p>
              </div>
              <span className="text-xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Fanta Original</p>
                <p className="text-sm text-zinc-500">Vaso Fanta Original.</p>
              </div>
              <span className="text-xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Fanta Sin Azúcar</p>
                <p className="text-sm text-zinc-500">Vaso Fanta Sin Azúcar.</p>
              </div>
              <span className="text-xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Sprite Original</p>
                <p className="text-sm text-zinc-500">Vaso Sprite Original.</p>
              </div>
              <span className="text-xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Sprite Sin Azúcar</p>
                <p className="text-sm text-zinc-500">Vaso Sprite Sin Azúcar.</p>
              </div>
              <span className="text-xl">$2.100</span>
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
        subtitle="Diferentes cervezas para todos los gustos."
        title="Cervezas"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Botella Stella Artois</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$2.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Botella Austral Lager</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$3.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Botella Calafate</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$3.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Botella Kunstmann Torobayo</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Botella Cusqueña</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$3.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Botella Royal</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$2.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Botella Heineken</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$2.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Schop Kunstmann Torobayo</p>
                <p className="text-sm text-zinc-500">Schop 500 ml.</p>
              </div>
              <span className="text-xl">$5.300</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Schop Kunstmann</p>
                <p className="text-sm text-zinc-500">Schop 500 ml.</p>
              </div>
              <span className="text-xl">$5.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Schop Austral Calafate</p>
                <p className="text-sm text-zinc-500">Schop 500 ml.</p>
              </div>
              <span className="text-xl">$5.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Schop Austral Lager</p>
                <p className="text-sm text-zinc-500">Schop 500 ml.</p>
              </div>
              <span className="text-xl">$5.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Schop Tubinger Ambar</p>
                <p className="text-sm text-zinc-500">Schop 500 ml.</p>
              </div>
              <span className="text-xl">$4.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Schop Heineken</p>
                <p className="text-sm text-zinc-500">Schop 500 ml.</p>
              </div>
              <span className="text-xl">$4.600</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Heineken Sin Alcohol</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$2.300</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Mestra Sin Alcohol</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$2.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Kunstmann Sin Alcohol</p>
                <p className="text-sm text-zinc-500">Botella 330 ml.</p>
              </div>
              <span className="text-xl">$2.800</span>
              </li>
          </ul>
        </div>
      </AccordionItem>
      <AccordionItem
        key="8"
        aria-label="Zoey Lang"
        startContent={
          <BebidasCalientesSvg
            isBordered
            color="warning"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
        }
        subtitle="Calienta tu corazón con nuestras bebidas calientes."
        title="Bebidas calientes"
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Té</p>
                <p className="text-sm text-zinc-500">Té chai, té matcha, té negro, té verde, té blanco y té rojo.</p>
              </div>
              <span className="text-xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Infusiones</p>
                <p className="text-sm text-zinc-500">Infusiones de manzanilla, manzanilla-miel y menta.</p>
              </div>
              <span className="text-xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Café Espresso</p>
                <p className="text-sm text-zinc-500">Café Espresso.</p>
              </div>
              <span className="text-xl">$2.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Café Irlandés</p>
                <p className="text-sm text-zinc-500">Café, whisky y crema de leche.</p>
              </div>
              <span className="text-xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='font-bold'>Café Americano</p>
                <p className="text-sm text-zinc-500">Café Americano.</p>
              </div>
              <span className="text-xl">$2.500</span>
              </li>
          </ul>
        </div>
      </AccordionItem>
</Accordion>
</div>
  )
}
