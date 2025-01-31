// Carrito inicial
let carrito = [];
const divProductos = document.getElementById('productos');
const botonCarrito = document.getElementById('botonCarrito');

// Función para actualizar la interfaz del carrito
function actualizarCarrito() {
  // Actualizar el contador del carrito
  const contadorCarrito = document.getElementById('contador-carrito');
  contadorCarrito.innerText = carrito.length;
}

// Función para añadir un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

// aqui mostraremos en pantalla todo el inventario
function addElementoDiv() {

  let id = 0; // le añadiremos el atributo id para identificar luego cada producto

  for (let producto of inventario) {
    producto['id'] = id; // para que el primer producto tenga id=0     

    // Usamos bootstrap con un acumulador por líneas
    let contenido = "";
    contenido += '<div class="row">';
    contenido += '  <div class="col-md-8 ">';
    contenido += '    <img src="' + producto['url_imagen'] + '" alt="' + producto['descripcion'] + '" class="img-fluid">';
    contenido += '  </div>';
    contenido += '  <div class="col-md-4 ">';
    contenido += '    <h5>' + producto['descripcion'] + '</h5>';
    contenido += '    <p class= "precio">Precio: $' + producto['precio'] + '</p>';
    contenido += '    <p class = "descuento">Descuento: ' + producto['descuento'] + '</p>';
    contenido += '    <button class="btn btn-primary" id=' + id + '>Comprar</button>';
    contenido += '  </div>';
    contenido += '</div>';

    id++;// una vez asignada la id al producto aumentamos su valor

    divProductos.innerHTML += contenido; // Insertar el contenido generado al contenedor acumulandolo
    console.log(producto);
  }
  // le damos la funcionalidad a cada boton creado en el bucle
  for (let i = 0; i < inventario.length; i++) {
    let botonProducto = document.getElementById(i);// le asignamos i ya que el identificador de cada boton en el bucle va a ser numerico y contiguo
    botonProducto.addEventListener('click', () => {
      agregarAlCarrito(inventario[i])
      console.log("Se ha agregado al carrito el producto :" + inventario[i]['descripcion']);
     // alert("Se ha agregado al carrito el producto :" + inventario[i]['descripcion']);
    });
  }
}
addElementoDiv(); // Lo llamamos (ejecutamos)

/*Cuando le des al boton carrito te saldra una lista con los elementos del carrito, 
y el precio con y sin iva y con el descuento aplicado si lo tiene. El iva es el 21% 
y el descuento es sin descueno 0, normal un 7% y el del black friday un 15% y pondra 
un boton al final que sera finalizar pago.*/


function verCarrito(){
  divProductos.innerHTML = " "
  let totalPrecio =0;
  
  for (let productoCarrito of carrito){
    totalPrecio += productoCarrito['precio'];
    let contenidoCarrito="";
    contenidoCarrito += '<div class = "row1">';
    contenidoCarrito +=   '<div class = col-md-8">';
    contenidoCarrito +=     '<h4>' + productoCarrito['descripcion'] + '</h4>';
    contenidoCarrito +=   '</div>';

    contenidoCarrito +=  '<div class = col-md-4">';
    contenidoCarrito +=     '<h3>' + productoCarrito['precio'] + '</h3>';
    contenidoCarrito +=   '</div>';
    contenidoCarrito += '</div>';


    divProductos.innerHTML += contenidoCarrito;

  }
  let totalCarrito = '<h2>'+Math.round(totalPrecio * 100) / 100+ '€ + I.V.A</h2>';
  divProductos.innerHTML += totalCarrito;

}

// si pongo el parentesis se ejecuta, 
botonCarrito.addEventListener('click',verCarrito);
  

    



















