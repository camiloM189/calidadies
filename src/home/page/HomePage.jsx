
import { Link } from "react-router-dom"



export const HomePage = () => {


 
  return ( 
    <>

    <div className="container">
    <div className=" justify-content-center text-center">
      
        <Link to='/homepage/DenominacionPage'>
        <button className="mt-3 mb-3 ms-3 me-3  contenedor2 border border-3 border-dark p-1">
        Denominacion
        </button>
        </Link>
      <Link to='/homepage/Justificacióndelprograma'>
      <button className="mt-3 mb-3 ms-3 me-3 contenedor2 border border-3 border-dark p-1">
        Justificación del programa
      </button>
      </Link>
      <Link to='/homepage/Aspectoscurriculares'>
      <button className="mt-3 mb-3 ms-3 me-3 contenedor2 border border-3 border-dark p-1">
        Aspectos curriculares
      </button>
      </Link>

      <button className="mt-3 mb-3 ms-3 me-3 contenedor2 border border-3 border-dark p-1">
        Organización de las actividades académicas y proceso formativo
      </button>
      <button className="mt-3 mb-3 ms-3 me-3 contenedor2 border border-3 border-dark p-1">
        Investigación, innovación y/o creación artística y cultural
      </button>
      <button className="mt-3 mb-3 ms-3 me-3 contenedor2 border border-3 border-dark p-1">
        Relación con el sector externo
      </button>
      <button className="mt-3 mb-3 ms-3 me-3 contenedor2 border border-3 border-dark p-1">
        Profesores
      </button>
      <button className="mt-3 mb-3 ms-3 me-3 contenedor2 border border-3 border-dark p-1">
        Medios Educativos
      </button>
      <button className="mt-3 mb-3 ms-3 me-3 contenedor2 border border-3 border-dark p-1">
        Infraestructura Física
      </button>
    </div>
    
  </div>
    </>   
  )
}
