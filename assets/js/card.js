


function calcularTotal(){

//Guardar en variables los elementos a modificar
    let cantidad = document.querySelector('.cantidad');
    let color = document.querySelector('.color');
    let precio = document.querySelector(".precio");

    let totalPrecio = document.querySelector('.total-precio');
    let totalCantidad = document.querySelector('.total-cantidad');
    let totalColor = document.querySelector('.total-color div');

    
//Modificar DOM

    //total a pagar
    totalPrecio.innerHTML = (Number(precio.innerHTML))*(cantidad.value);
    
    //Cantidad
    totalCantidad.innerHTML = cantidad.value;
    
    //color
    totalColor.style.backgroundColor = color.value;

}

