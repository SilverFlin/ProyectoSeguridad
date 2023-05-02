<template>
  <header class="fondo">
    <div class="about">
      <h1>Seguridad informatica</h1>
      <p class="">Bienvenidos</p>
    </div>
  </header>
  <div class="tips1">
    <h1>Seguridad</h1>
    <p class=""> Haz una buena gestión de tus contraseñas</p>
  </div>
  <div class="tips2">
    <h1>Seguridad</h1>
    <p class=""> Actualiza siempre el software básico</p>
  </div>
  <div class="tips3">
    <h1>Seguridad</h1>
    <p class=""> El antivirus, siempre</p>
  </div>
</template>

<style>
:root {
  scroll-behavior: smooth;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    -ms-text-size-adjust: auto;
  }
}
.fondo {
  height: 100vh;
  /* 02 */
  background-image: linear-gradient(to top, rgba(103, 102, 103, 0.486) 0%, hsla(220, 5%, 34%, 0.514) 100%), url(img/hacker2.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.tips1{
  
    display: flex;
    align-items: center;
    justify-content: column;
    place-items: flex-direction;
    flex-wrap: wrap;
  
}
.tips2{
  min-height: 100vh;
    display: flex;
    align-items:last baseline;
    justify-content: column;
    place-items: column;
    flex-wrap: wrap;
  
}
.tips3{
  min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: column;
    place-items: flex-direction;
    flex-wrap: wrap;
  
}
</style>
