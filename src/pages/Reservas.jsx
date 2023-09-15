import { FormularioReservas } from '../components/FormularioReservas';

export const Reservas = () => {
  return (
    <div className='flex gap-10'>
      <section className='w-full md:w-1/2'>
        <h1 className='font-bold m-5 text-xl'>Condiciones de reservas</h1>
      <div className='flex flex-col items-start text-start gap-4'>
      <p >1.	Para poder ofrecerles un buen servicio, es muy importante la puntualidad de todos los comensales de la mesa. Rogamos respeten al máximo este punto.</p>
      <p>2.	Si no sale la hora que buscan o no deja escoger el número de personas, significa que el restaurante está completo.</p>
      <p>3.	No seleccionen un número de personas distinto del que realmente vendrán. En el caso que llegue un número diferente de personas y no se haya avisado en las 24 horas previas, nos reservamos el derecho a cancelar su reserva y hacer un cargo extra.</p>
      <p>4.	Tienen 15 minutos de cortesía. Si pasados esos minutos no se ha presentado, su reserva quedará anulada.</p>
      <p>5.	Una vez realizada la reserva recibirán un email al instante para reconfirmarla. Si no lo hacen, la reserva se cancelará automáticamente.</p>
      <p>6.	Para cualquier modificación en su reserva, puede escribir a reservas@larustika.com</p>
      </div>
      <img className='mt-8 rounded-xl' src="assets/images/Absolute_Reality1.jpg" alt="" />
      </section>
      <FormularioReservas/>
    </div>
    
  )
}


