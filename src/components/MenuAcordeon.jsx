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
    <div className="md:px-28 mt-10 font-praise">
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Chung Miller"
        startContent={
          <PizzaSvg
          />
        }
        subtitle={<p className="font-mooli">Nuestra especialidad son las pizzas a la piedra.</p>}
        title={<p className="text-3xl" >Pizzas</p>}
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Rústica</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, queso de cabra, aceitunas, tocino, queso parmesano y orégano.</p>
              </div>
              <span className="text-2xl">$13.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Margarita</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, albahaca fresca.</p>
              </div>
              <span className="text-2xl">$12.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Jardín</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, tomate fresco, rúcula, berenjena, pimiento, ajo y aceite de oliva.</p>
              </div>
              <span className="text-2xl">$13.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Berenjena</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, berenjena, queso parmesano y un toque de miel.</p>
              </div>
              <span className="text-2xl">$14.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Salmón</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Masa a la piedra, queso mozzarella, salmón, pesto, ricotta y rúcula.</p>
              </div>
              <span className="text-2xl">$14.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Cielito Lindo</p>
                <p className="font-mooli text-sm text-zinc-500 italic text-left">Masa a la piedra, salsa pomodoro, queso mozzarella, aceitunas, tomate cherry, choclo, cebolla caramelizada, pimientos y choricillo.</p>
              </div>
              <span className="text-2xl">$12.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Aurora Boreal</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, champiñón, aceitunas y tocino.</p>
              </div>
              <span className="text-2xl">$13.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Tormenta</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, doble queso mozzarella, doble pepperoni.</p>
              </div>
              <span className="text-2xl">$12.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Sol de Verano</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Masa a la piedra, salsa pomodoro, queso mozzarella, tomate cherry, rúcula y jamón serrano.</p>
              </div>
              <span className="text-2xl">$12.500</span>
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
        subtitle={<p className="font-mooli">Disfruta tu pizza con ricos acompañamientos.</p> }
        title={<p className="text-3xl">Acompañamientos</p> }
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Papas fritas</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Papas fritas caseras.</p>
              </div>
              <span className="text-2xl">$4.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Papas fritas supremas</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Papas fritas, carne molida, tomate picado, cebollín, salsa de queso y salsa de yogurt.</p>
              </div>
              <span className="text-2xl">$6.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Empanadas de queso</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Empanadas fritas rellenas con queso.</p>
              </div>
              <span className="text-2xl">$4.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Pollo apanado</p>
                <p className="font-mooli text-sm text-zinc-500 italic">8 Pollos apanados más salsa de la casa.</p>
              </div>
              <span className="text-2xl">$5.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Salsa Pomodoro</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Salsa de tomate.</p>
              </div>
              <span className="text-2xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Salsa de Ajo</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Salsa de Ajo.</p>
              </div>
              <span className="text-2xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Salsa Mostaza-Miel</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Salsa de mostaza y miel.</p>
              </div>
              <span className="text-2xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Salsa Barbecue</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Salsa Barbecue.</p>
              </div>
              <span className="text-2xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Salsa Pesto</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Salsa de Pesto.</p>
              </div>
              <span className="text-2xl">$850</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Salsa de Ají</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Salsa de Ají.</p>
              </div>
              <span className="text-2xl">$850</span>
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
        subtitle={<p className="font-mooli">Qué mejor que un toque dulce.</p> }
        title={<p className="text-3xl">Postres</p> }
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Rollos de Canela</p>
                <p className="font-mooli text-sm text-zinc-500 italic">8 Rollos acompañados de nuestra exquisita salsa de canela y glaseado.</p>
              </div>
              <span className="text-2xl">$5.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Brownie de Chocolate</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Brownie de Chocolate.</p>
              </div>
              <span className="text-2xl">$2.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Brownie de Arándanos</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Brownie de Arándanos.</p>
              </div>
              <span className="text-2xl">$2.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Banana Split</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Plátano, helado de vainilla, chocolate y fresa, crema chantilly, salsa de chocolate, frutos secos, cereza al marrasquino.</p>
              </div>
              <span className="text-2xl">$3.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Pie de Limón</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Trozo de Pie de Limón.</p>
              </div>
              <span className="text-2xl">$4.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Kuchen de Manzana</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Trozo de Kuchen de Manzana.</p>
              </div>
              <span className="text-2xl">$4.500</span>
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
        subtitle={<p className="font-mooli">Conoce nuestros diferentes sabores de jugos.</p> }
        title={<p className="text-3xl">Jugos</p> }
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Mango</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Jugo natural de Mango.</p>
              </div>
              <span className="text-2xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Frutilla</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Jugo natural de Frutilla.</p>
              </div>
              <span className="text-2xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Frambuesa</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Jugo natural de Frambuesa.</p>
              </div>
              <span className="text-2xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Naranja</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Jugo natural de Naranja.</p>
              </div>
              <span className="text-2xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Piña</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Jugo natural de Piña.</p>
              </div>
              <span className="text-2xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Melón</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Jugo natural de Melón.</p>
              </div>
              <span className="text-2xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Maracuyá</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Jugo natural de Maracuyá.</p>
              </div>
              <span className="text-2xl">$3.500</span>
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
        subtitle={<p className="font-mooli">Prueba nuestras refrescantes limonadas.</p> }
        title={<p className="text-3xl">Limonadas</p> }
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Clásica</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Limonada clásica.</p>
              </div>
              <span className="text-2xl">$3.600</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Menta</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Limonada Menta.</p>
              </div>
              <span className="text-2xl">$3.600</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Jengibre</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Limonada Jengibre.</p>
              </div>
              <span className="text-2xl">$3.600</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Menta-Jengibre</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Limonada Menta-Jengibre.</p>
              </div>
              <span className="text-2xl">$3.600</span>
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
        subtitle={<p className="font-mooli">Variedad de bebidas con y sin azúcar.</p> }
        title={<p className="text-3xl">Bebidas</p> }
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Coca-Cola Original</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Vaso Coca-Cola Original.</p>
              </div>
              <span className="text-2xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Coca-Cola Sin Azúcar</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Vaso Coca-Cola Sin Azúcar.</p>
              </div>
              <span className="text-2xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Fanta Original</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Vaso Fanta Original.</p>
              </div>
              <span className="text-2xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Fanta Sin Azúcar</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Vaso Fanta Sin Azúcar.</p>
              </div>
              <span className="text-2xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Sprite Original</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Vaso Sprite Original.</p>
              </div>
              <span className="text-2xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Sprite Sin Azúcar</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Vaso Sprite Sin Azúcar.</p>
              </div>
              <span className="text-2xl">$2.100</span>
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
        subtitle={<p className="font-mooli">Diferentes cervezas para todos los gustos.</p> }
        title={<p className="text-3xl">Cervezas</p> }
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Botella Stella Artois</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Stella Artois 330 ml.</p>
              </div>
              <span className="text-2xl">$2.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Botella Austral Lager</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Austral Lager 330 ml.</p>
              </div>
              <span className="text-2xl">$3.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Botella Calafate</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Calafate 330 ml.</p>
              </div>
              <span className="text-2xl">$3.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Botella Kunstmann Torobayo</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Kunstmann Torobayo 330 ml.</p>
              </div>
              <span className="text-2xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Botella Cusqueña</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Cusqueña 330 ml.</p>
              </div>
              <span className="text-2xl">$3.000</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Botella Royal</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Royal 330 ml.</p>
              </div>
              <span className="text-2xl">$2.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Botella Heineken</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Heineken 330 ml.</p>
              </div>
              <span className="text-2xl">$2.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Schop Kunstmann Torobayo</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Schop Kunstmann Torobayo 500 ml.</p>
              </div>
              <span className="text-2xl">$5.300</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Schop Kunstmann</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Schop Kunstmann 500 ml.</p>
              </div>
              <span className="text-2xl">$5.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Schop Austral Calafate</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Schop Austral Calafate 500 ml.</p>
              </div>
              <span className="text-2xl">$5.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Schop Austral Lager</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Schop Austral Lager 500 ml.</p>
              </div>
              <span className="text-2xl">$5.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Schop Tubinger Ambar</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Schop Tubinger Ambar 500 ml.</p>
              </div>
              <span className="text-2xl">$4.800</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Schop Heineken</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Schop Heineken 500 ml.</p>
              </div>
              <span className="text-2xl">$4.600</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Heineken Sin Alcohol</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Heineken Sin Alcohol 330 ml.</p>
              </div>
              <span className="text-2xl">$2.300</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Mestra Sin Alcohol</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Mestra Sin Alcohol 330 ml.</p>
              </div>
              <span className="text-2xl">$2.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Kunstmann Sin Alcohol</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Botella Kunstmann Sin Alcohol 330 ml.</p>
              </div>
              <span className="text-2xl">$2.800</span>
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
        subtitle={<p className="font-mooli">Calienta tu corazón con nuestras bebidas calientes.</p> }
        title={<p className="text-3xl">Bebidas calientes</p> }
      >
        <div>
          <ul className="gap-3 flex flex-col">
            <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Té</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Té chai, té matcha, té negro, té verde, té blanco y té rojo.</p>
              </div>
              <span className="text-2xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Infusiones</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Infusiones de manzanilla, manzanilla-miel y menta.</p>
              </div>
              <span className="text-2xl">$2.100</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Café Espresso</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Café Espresso.</p>
              </div>
              <span className="text-2xl">$2.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Café Irlandés</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Café, whisky y crema de leche.</p>
              </div>
              <span className="text-2xl">$3.500</span>
              </li>
              <hr className="mx-20"/>
              <li className="flex justify-between px-5 sm:px-20">
              <div className="flex flex-col justify-start items-start">
                <p className='text-2xl'>Café Americano</p>
                <p className="font-mooli text-sm text-zinc-500 italic">Café Americano.</p>
              </div>
              <span className="text-2xl">$2.500</span>
              </li>
          </ul>
        </div>
      </AccordionItem>
</Accordion>
</div>
  )
}
