import { FormularioReservas } from '../components/FormularioReservas';

export const Reservas = () => {
  return (
    <div className='flex gap-10 flex-col md:flex-row p-5 md:px-28'>
      <section className='w-full md:w-1/2 md:pl-10'>
        <h1 className='font-praise m-5 text-4xl'>Condiciones de reservas</h1>
      <div className='flex flex-col items-start text-start gap-4'>
      <p >1.	Para poder ofrecerles un buen servicio, es muy importante la puntualidad de todos los comensales de la mesa.</p>
      <p>2.	Si no sale la hora que buscan o no deja escoger el número de personas, significa que el restaurante está completo.</p>
      <p>3.	No seleccionen un número de personas distinto del que realmente vendrán.</p>
      <p>4.	Tienen 15 minutos de cortesía. Si pasados esos minutos no se ha presentado, su reserva quedará anulada.</p>
      <p>5.	Una vez realizada la reserva recibirán un email al instante para reconfirmarla. Si no lo hacen, la reserva se cancelará automáticamente.</p>
      <p>6.	Para cualquier modificación en su reserva, puede escribir a reservas@larustika.com</p>
      </div>
      <img className='mt-8 rounded-xl' src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1694792822/Absolute_Reality_v16_Generate_an_image_of_the_terrace_of_a_piz_1_qtp5lq.jpg" alt="" />
      </section>
      <FormularioReservas/>
    </div>
    
  )
}



