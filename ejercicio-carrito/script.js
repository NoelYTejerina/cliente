// Carrito inicial
let carrito = [];

// Función para añadir un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}


// Función para actualizar la interfaz del carrito
function actualizarCarrito() {
  // Actualizar el contador del carrito
  const contador = document.getElementById('contador-carrito');
  contador.innerText = carrito.length;
}

let productos=[];

function addElementoDiv() {
  // Inicializamos un contenedor vacío para los productos
  let contenido = "";
  
  inventario.forEach((producto, indice) => {        
    // Usamos Bootstrap para el diseño
    contenido += '<div class="row">';
    contenido += '  <div class="col-md-4">';
    contenido += '    <img src="' + producto['url_imagen'] + '" alt="' + producto['descripcion'] + '" class="img-fluid">';
    contenido += '  </div>';
    contenido += '  <div class="col-md-8">';
    contenido += '    <h5>' + producto['descripcion'] + '</h5>';
    contenido += '    <p>Precio: $' + producto['precio'] + '</p>';
    contenido += '    <p>Descuento: ' + producto['descuento'] + '</p>';
    contenido += '    <button class="btn btn-primary" id="boton' + indice + '">Comprar</button>';
    contenido += '  </div>';
    contenido += '</div>';

    productos.push(producto);
  });

  // Insertar el contenido generado al contenedor
  const productosContainer = document.getElementById('productos');
  productosContainer.innerHTML = contenido;

  // Asignar eventos a cada botón de "Comprar"
  productos.forEach((producto, indice) => {
    const botonAñadirCarrito = document.getElementById(`boton${indice}`);
    botonAñadirCarrito.addEventListener("click", () => {
      agregarAlCarrito(producto);
      alert("Has añadido al carrito: " + producto.descripcion);
    });
  });
}

addElementoDiv();




// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()
// carrito.push(producto);
// actualizarCarrito()

