 
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente ,eliminarPaciente}) {

  return (
    <div className="md:w-1/2 lg:h-3/5 h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-bold text-center text-3xl ">Listado Pacientes</h2>
          <p className="text-xl my-6 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((e) => (
            <Paciente
              e={e} //E es el objeto pacientes , toca enviar el objeto para poderlo almacenarlo en el nuevo setPaciente
              setPaciente={setPaciente}
              key={e.id}
              id={e.id}
              nombre={e.nombre}
              propietario={e.propietario}
              email={e.email}
              fecha={e.fecha}
              sintomas={e.sintomas}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-bold text-center text-3xl ">No Hay Pacientes</h2>
          <p className="text-xl my-6 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
