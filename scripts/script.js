 function AddToCar(){
    var productoPrecio = document.getElementsByClassName("productoPrecio")[0].innerHTML;   
    var productoTitulo = document.getElementsByClassName("productoTitulo")[0].innerHTML;
    var productoCantidad = document.getElementsByClassName("productoCantidad")[0].value;  
    var productoImagenUrl = document.getElementsByClassName("productoImagenUrl")[0].src; 
    var productoId = document.getElementsByClassName("productoId")[0].id;
    // console.log(productoPrecio, productoTitulo, productoCantidad, productoImagenUrl, productoId);
    localStorage.setItem(productoId,[productoPrecio, productoTitulo, productoCantidad, productoImagenUrl]);
    var carrito = localStorage.getItem(productoId);
    console.log(carrito);    
    alert("Producto agregado correctamente al carrito"); 
};












