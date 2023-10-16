const assert = require('assert');

// Supongamos que esta es una función que realiza una solicitud fetch
function obtenerDatosRemotos() {
    return fetch('http://192.168.1.133:3000/datos/obtenerReciente')
      .then(response => response.json());
  }
  
  // Ahora, puedes escribir tus pruebas sin Sinon
  describe('obtenerDatosRemotos', () => {
    it('debería manejar datos exitosos', async () => {
      // Simular una respuesta exitosa con datos ficticios
      const fakeData = [{ ppm: 80 }];
  
      // Reemplazar fetch con una función que devuelve datos ficticios
      const originalFetch = global.fetch;
      global.fetch = () => Promise.resolve({
        json: () => Promise.resolve(fakeData),
      });
  
      // Ejecutar la función que obtiene datos remotos
      const resultado = await obtenerDatosRemotos();
  
      // Verificar que los datos sean los esperados
      assert.deepStrictEqual(resultado, fakeData);
  
      // Restaurar fetch
      global.fetch = originalFetch;
    });
  
    it('debería manejar errores de solicitud', async () => {
      // Simular un error de solicitud
      const fakeError = new Error('Error simulado');
  
      // Reemplazar fetch con una función que simula un error
      const originalFetch = global.fetch;
      global.fetch = () => Promise.reject(fakeError);
  
      // Ejecutar la función que obtiene datos remotos
      try {
        await obtenerDatosRemotos();
      } catch (error) {
        // Verificar que el error sea el esperado
        assert.strictEqual(error, fakeError);
      }
  
      // Restaurar fetch
      global.fetch = originalFetch;
    });
  });
  