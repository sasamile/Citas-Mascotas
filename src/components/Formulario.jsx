import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ setPacientes, pacientes, paciente,setPaciente }) {
  //Colocar valor Inicial del Formulario
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  //Error para la validacion del formulario para que haya campos vacios
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  function generalId() {
    const id = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2);

    return id + random;
  }
  function handleSubmit(e) {
    //previene el envio del formulario por defecto
    e.preventDefault();

    //Validacion de Formulario

    {
      /**El include verifica que si hay un campo vacio si esta vacio llama al useState de Error y lo cambio a true pa mostrar un error en la pagina  */
    }
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
    } else {
      setError(false);
    }

    //objeto de pacientes
    {
      /**Almacena un nuevo objeto cada vez que se ingresa un nuevo registro en el formulario */
    }
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editando registro
      objetoPaciente.id =paciente.id

      const pacinetesActualizados = pacientes.map(pacienteState=> pacienteState.id === paciente.id ? objetoPaciente :pacienteState)

      setPacientes(pacinetesActualizados)
      setPaciente({})

    } else {
      //nuevo registro
      objetoPaciente.id = generalId();
      setPacientes([...pacientes, objetoPaciente]);
    }

   

    // Almacenar un nuevo objeto
    {
      /**Se llama a la propiedad que se creo en App.js para almacenar el los cambio del objeto creado en una copia del pacientes */
    }

    //Reiniciar Formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  }

  return (
    <div className="md:w-1/2 lg:h-2/5 mx-5">
      <h1 className="font-bold text-3xl text-center">Seguimiento Pacientes</h1>
      <p className="text-lg mt-5 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administrado</span>
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-8 my-10"
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold "
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota "
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400 "
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        {/**Fin */}

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold "
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre Propietario"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400 "
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        {/**Fin */}

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold "
          >
            Correo Electronico
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/**Fin */}

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold "
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400 "
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        {/**Fin */}

        <div className="mb-5">
          <label
            htmlFor="Sintomas"
            className="block text-gray-700 uppercase font-bold "
          >
            Sintomas
          </label>
          <textarea
            name=""
            id="comentario"
            placeholder="Escribe los sintomas"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400 "
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        {paciente.id ? (
          <input
            type="submit"
            className="bg-yellow-500 w-full p-3 text-white uppercase font-bold hover:bg-yellow-600 cursor-pointer transition-all"
            value="Editar Paciente"
          />
        ) : (
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar Paciente"
          />
        )}

        {/** Alerta de los campo son obligatorios llamado al hook de error */}
        {error && <Error>Todos los campos son obligatorio</Error>}
      </form>
    </div>
  );
}

export default Formulario;
