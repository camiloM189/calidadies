import { useDispatch } from "react-redux";
import { onPage } from "../store/auth/authSlice";



export const HomePageCalidadies = () => {
  const dispatch = useDispatch();

  const startAplication = () => {
    dispatch(onPage());
  }
  return (
  <>
    <main class="pt-5 bg-gradient-blue-green">
      <div class="container">
        <section class="row text-white align-items-lg-center mb-5">
          <article class=" col-12 col-lg-5 ">
            <h2>Calidadies</h2>

            <p class="fs-5">Un sitio hermoso, moderno, responsivo y personalizado para tu compañia, negocio, marca, servicio o 
              producto.</p>

            <a href="#servicios" class="btn btn-success btn-lg fw-bold">Si, ¡empecemos!</a>
          </article>
          <article class=" col-12 col-lg-7 ">

          </article>
          <article class=" col-12 col-lg-5 order-lg-1 ">
            <h2>Sitios web responsivos</h2>
            <p class="fs-5">Es importante proporcionar a tus visitantes una experiencia web óptima en dispositivos móviles. El diseño web responsivo significa que tu sitio se adapta instantáneamente al dispositivo que el visitante utiliza.
               ¡Mi trabajo es hacer, que la visita de tus usuarios sea lo más agradable e intuitiva para ellos!</p>
          </article>
          <article class=" col-12 col-lg-7 ">
        </article>
        </section>
        <section id="servicios"class="row min-vh-100 align-items-lg-center ">
          <article class="col-12 col-md-6 col-lg-3 d-flex">
            <div class="card mx-auto  mb-3">
            
              <div class="card-body">
                <h5 class="card-title">Nuevo sitio web</h5>
                <p class="card-text">¿Necesitas un (nuevo) sitio web 100% responsivo?</p>
                <a href="sitios.html" class="second-text-color">Mas detalles <i class="bi bi-chevron-right"></i></a>
              </div>
            </div>
          </article>
          <article class="col-12 col-md-6 col-lg-3 d-flex">
            <div class="card mx-auto  mb-3" >
         
              <div class="card-body">
                <h5 class="card-title">Clientes
                </h5>
                <p class="card-text"> Clientes felices y proyectos hermosos</p>
                <a href="clientes.html" class="second-text-color">Mas detalles <i class="bi bi-chevron-right"></i></a>
              </div>
            </div>
          </article>
          <article class="col-12 col-md-6 col-lg-3 d-flex">
            <div class="card mx-auto  mb-3" >
           
              <div class="card-body">
                <h5 class="card-title">Flujo de Trabajo
                 
                </h5>
                <p class="card-text">Escucho tus necesidades. Discutamos tu proyecto.</p>
                <a href="comencemos.html" class="second-text-color">Mas detalles <i class="bi bi-chevron-right"></i></a>
              </div>
            </div>
          </article>
          <article class="col-12 col-md-6 col-lg-3 d-flex">
            <div class="card mx-auto mb-3">
            
              <div class="card-body">
                <h5 class="card-title">¿Interesado?
                 
                </h5>
                <p class="card-text">  Comencemos con tu nuevo proyecto.</p>
                <a href="contacto.html" class="second-text-color">Mas detalles <i class="bi bi-chevron-right"></i></a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
    <footer class="bg-dark p-3">
      <div class="container text-center">
      <nav class="d-flex  justify-content-evenly">
        <a href="https://facebook.com" target="_blank"><i class="bi bi-facebook fs-3"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="bi bi-twitter fs-3"></i></a>
        <a href="https://github.com" target="_blank"><i class="bi bi-github fs-3"></i></a>
        <a href="https://youtube.com" target="_blank"><i class="bi bi-youtube fs-3"></i></a>
        <a href="https://instagram.com" target="_blank"><i class="bi bi-instagram fs-3"></i></a>
        <a href="https://messenger.com" target="_blank"><i class="bi bi-messenger fs-3"></i></a>
        <a href="https://whatsapp.com" target="_blank"><i class="bi bi-whatsapp fs-3"></i></a>
      </nav>
      <small class="text-white">&copy; 2023 Aprendiendo Boostrap</small>
    </div>
    </footer> 
  </>
    
  )
}
