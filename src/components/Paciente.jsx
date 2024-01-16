function Paciente({
  id,
  setPaciente,
  e,
  nombre,
  propietario,
  email,
  fecha,
  sintomas,
  eliminarPaciente,
}) {
  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar Este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="bg-white shadow-md mx-10 my-10  px-5 py-10 rounded-xl ">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      {/**Fin */}
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case"> {propietario}</span>
      </p>
      {/**Fin */}
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case"> {email}</span>
      </p>
      {/**Fin */}
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: <span className="font-normal normal-case"> {fecha}</span>
      </p>
      {/**Fin */}
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case"> {sintomas} </span>
      </p>
      {/**Fin */}
      <div className="flex justify-between mt-5 w-full">
        <button
          onClick={() => setPaciente(e)}
          className="border-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg py-2 px-10 text-white font-bold uppercase"
          type="button"
        >
          Editar
        </button>
        <button
          onClick={handleEliminar}
          className="border-2 bg-red-600 hover:bg-red-700 rounded-lg py-2 px-10 text-white font-bold uppercase"
          type="button"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
