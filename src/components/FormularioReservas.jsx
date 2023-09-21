import { Button, Label, TextInput, Select, Datepicker, Textarea} from 'flowbite-react';

export const FormularioReservas = () => {
  return (
    <form className="flex max-w-md flex-col gap-4 w-full md:w-1/2 mx-auto">
        <h1 className='m-5 font-bold text-xl'>Reserva aquí 👇</h1>
        <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Selecciona tu restaurante"
        />
      </div>
      <Select
        id="countries"
        required
      >
        <option className='text-center'>
          Maipú
        </option>
        <option className='text-center'>
          Algarrobo
        </option>
      </Select>
    </div>
    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Selecciona el n° de comensales"
        />
      </div>
      <Select
        id="countries"
        required
      >
        <option className='text-center'>
          1
        </option>
        <option className='text-center'>
          2
        </option>
        <option className='text-center'>
          3
        </option>
        <option className='text-center'>
          4
        </option>
        <option className='text-center'>
          5
        </option>
        <option className='text-center'>
          6
        </option>
        <option className='text-center'>
          7
        </option>
        <option className='text-center'>
          8
        </option>
        <option className='text-center'>
          9
        </option>
        <option className='text-center'>
          10
        </option>
      </Select>
    </div>
    <div>
    <div className="mb-2 block">
        <Label
          htmlFor="email2"
          value="Selecciona la fecha"
        />
      </div>
    <Datepicker weekStart={3} labelClearButton="Limpiar" labelTodayButton='Hoy' language="es" autoHide/>
    </div>
    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Selecciona la zona"
        />
      </div>
      <Select
        id="countries"
        required
      >
        <option className='text-center'>
          Salón
        </option>
        <option className='text-center'>
          Terraza
        </option>
      </Select>
    </div>
    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="countries"
          value="Selecciona el horario"
        />
      </div>
      <Select
        id="countries"
        required
      >
        <option className='text-center'>
          12:00
        </option>
        <option className='text-center'>
          13:00
        </option>
        <option className='text-center'>
          14:00
        </option>
        <option className='text-center'>
          15:00
        </option>
        <option className='text-center'>
          16:00
        </option>
        <option className='text-center'>
          17:00
        </option>
        <option className='text-center'>
          18:00
        </option>
        <option className='text-center'>
          19:00
        </option>
        <option className='text-center'>
          20:00
        </option>
        <option className='text-center'>
          21:00
        </option>
        <option className='text-center'>
          22:00
        </option>
      </Select>
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="email2"
          value="Ingresa tu nombre completo"
        />
      </div>
      <TextInput
        id="email2"
        placeholder="Nombre Apellido"
        required
        shadow
        type="text"
      />
    </div>
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="email2"
          value="Ingresa tu email"
        />
      </div>
      <TextInput
        id="email2"
        placeholder="larustika@gmail.com"
        required
        shadow
        type="email"
      />
    </div>
    <div
      className="max-w-md"
      id="textarea"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="comment"
          value="Comentario sobre la reserva"
        />
      </div>
      <Textarea
        id="comment"
        placeholder="Escribe un comentario..."
        required
        rows={4}
      />
    </div>
    <Button type="submit" gradientMonochrome="success">
      <p className='text-lg'>Reservar</p>
    </Button>
  </form>
  )
}
