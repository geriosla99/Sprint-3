
var paginaPortaCable = "file:///C:/Users/HP/Downloads/sprint-3/pag/porta.html";
if (window.location.href == paginaPortaCable){
    var productoTitulo = document.getElementsByClassName("productoTitulo")[0].innerHTML;
    var productoCantidad = document.getElementsByClassName("productoCantidad")[0].value;  
    var productoImagenUrl = document.getElementsByClassName("productoImagenUrl")[0].src; 
    var productoId = document.getElementsByClassName("productoId")[0].id;
}



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

function Car(){
    var datos = []
    console.log("Carrito Pagina");
    datos = getLocalStorageData();
    console.log(datos);
    // for (let i = 0; i < datos.length; i++) {
    //     datos[i]
        
    // }
    for (let i = 0; i < datos.length; i++) {
        document.getElementsByClassName("productoPrecio")[0].innerHTML = datos[i][1][0];
        document.getElementsByClassName("productoTitulo")[0].innerHTML = datos[i][1][1];
        document.getElementsByClassName("productoCantidad")[0].innerHTML = datos[i][1][2];
        document.getElementsByClassName("productoImagenUrl")[0].src = datos[i][1][3];
        
    }
    calcularTotales(datos);
    
}

function calcularTotales(datosProductos) {
    var subTotalProducto = 0
    var subtotal = 0;
    const IVA = 0.19;
    var ivaPagar = 0;
    var total = 0;
    var precioProductoActual = "";
    var cantidadProductoActual = "";

    for (let i = 0; i < datosProductos.length; i++) {
        // Limpiamos variables en cada ciclo
        subTotalProducto = 0
        precioProductoActual = "";
        cantidadProductoActual = "";
        
        // Obtenemos precio y cantidad de cada producto y calculamos 
        // la sumatoria de subtotales de todos los producto
        precioProductoActual = datosProductos[i][1][0];
        cantidadProductoActual = datosProductos[i][1][2];
        subTotalProducto = parseInt(precioProductoActual) * parseInt(cantidadProductoActual);
        subtotal+=subTotalProducto;
    }
    ivaPagar = (subtotal * IVA)
    total = ivaPagar + subtotal;
    console.log("Subtotal: "+subtotal);
    console.log("Total: "+total);
    document.getElementById("subtotal").innerHTML  = subtotal + " COP";
    document.getElementById("iva").innerHTML = ivaPagar + " COP";
    document.getElementById("total").innerHTML = total + " COP";
    
    
}

function getLocalStorageData() {
    var dataTemp = [];
    var datosProductoActual = "";
    var arregloDatosProductoActual = []
    for (i = 0; i < localStorage.length; i++)   {
        datosProductoActual = localStorage.getItem(localStorage.key(i))
        arregloDatosProductoActual = datosProductoActual.split(",");
        dataTemp.push([localStorage.key(i) ,  arregloDatosProductoActual]);
    }
    return dataTemp;    
}








