export const NosotrosCard = () => {
  return (
    <div className="mt-6 lg:flex justify-center items-center gap-6 md:px-36 px-4" id="nosotros">
    <div className="w-full lg:w-1/2 py-6">
    <h3 className="p-4 text-5xl font-praise border-2 border-red-200 rounded-xl w-xl mb-4">
      Nosotros
    </h3>
    <p className="text-left text-lg italic">La Rústika Pizzería nació en el año 2018 como un pequeño emprendimiento creado en un ambiente familiar.
</p>
<p className="text-left text-lg italic">
Debido a la gran aceptación y divulgación de nuestros clientes, nuestro emprendimiento creció enormemente durante estos años, logrando inaugurar dos locales físicos, uno en Santiago y otro en Algarrobo.
</p>
<p className="text-left text-lg italic">
Nuestros restaurantes tienen un enfoque rústico, en donde se podrán encontrar pizzas con masas a la piedra y además contamos con una variedad de cervezas para compartir,  logrando así un ambiente agradable y cercano.
</p>

    </div>
  <div className="w-full lg:w-1/2">
    <img src="https://res.cloudinary.com/dhijxrbsk/image/upload//c_thumb,w_900,h_620,g_auto/v1694659609/Absolute_Reality_v16_Generate_an_image_of_a_woman_and_a_man_wh_0_doiymb.jpg" className="object-cover w-full rounded-xl" />
  </div>
  </div>
  )
}
