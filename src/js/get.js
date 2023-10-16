fetch('http://192.168.1.133:3000/datos/obtenerReciente') //cambiar la ip en caso de cambiar 
  .then(response => response.json())
  .then(data => {
    //data es los datos recogidos de la base de datos
    console.log(data);

    let contenedorID = document.getElementById('datoPrincipal');
    contenedorID.textContent = data[0].ppm + " ppm";

    // Declaramos variables
    let elemento = document.getElementById('datoPrincipal');
    let rectanguloColor = document.getElementsByClassName('circulo');

    // Condicion si la dato de concentracion es muy alta que cambie el color a rojo
    if (parseInt(elemento.textContent.slice(0, -4)) < 100) {
      rectanguloColor[0].style.backgroundColor = 'green';
    } else {
      rectanguloColor[0].style.backgroundColor = 'red';
    }
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });