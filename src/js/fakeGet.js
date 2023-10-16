/**
 * @brief Esta función obtiene datos desde un servidor local y los muestra en la página web.
 * 
 * Esta función realiza una solicitud GET a un servidor local y muestra los datos en una página web.
 * Si la solicitud no es exitosa, se maneja un error.
 */
async function obtenerDatosDesdeServidorLocal() {
    try {
        // Realizar una solicitud GET al servidor 
        const respuesta = await fetch('http://192.168.1.133:3000/datos/obtenerReciente/', { //cambiar la ip en caso de cambiar
            method: 'GET',
            headers: {
                'Content-Type': 'application/json' // Ajustar los encabezados según sea necesario
            }
        });
  
        if (!respuesta.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
  
        // Obtener los datos en formato JSON
        const datos = await respuesta.json();
        console.log('Datos recibidos desde el servidor local:', datos);
        
  
        let contenedorID = document.getElementById('datoPrincipal');
        
        // Convertir el JSON en una cadena legible y mostrarlo en la página
        contenedorID.textContent = JSON.stringify(datos, null, 2); 
        
    } catch (error) {
        console.error('Error:', error);
    }
  }
  
  // Llamar a la función para obtener y mostrar los datos
  obtenerDatosDesdeServidorLocal();