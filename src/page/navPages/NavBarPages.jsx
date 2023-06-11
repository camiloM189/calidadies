import { useDispatch } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { onPage } from "../../store/auth/authSlice";


export const NavBarPages = () => {
  const dispatch = useDispatch();

  // const startAplication = () => {
  //   dispatch(onPage());
// }
  return (
    <>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="img/calidadies.jpg" alt="logo de calidadies"/>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavDropdown">
          <ul class="navbar-nav  ms-lg-auto">
            <li class="nav-item">
              <Link to={'/HomePageCalidadies'}>
              <p class="nav-link active" aria-current="page">Home</p>
              
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sitios
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="sitios.html#ultimos-proyectos">Ultimos Proyectos</a></li>
                <li><a class="dropdown-item" href="sitios.html#sigle-page">Sitio <i>Single Page</i></a></li>
                <li><a class="dropdown-item" href="sitios.html#multi-page">Sitio <i>Multi Page</i></a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="clientes.html">Clientes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="comencemos.html">Conocenos</a>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to={'/auth/login'}>
                <p >Aplicacion</p>
              </Link>
              {/* <a class="nav-link" href="contacto.html"></a> */}
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
