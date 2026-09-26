function generarTablas() {
    // 1. Obtenemos el valor escrito en la caja de texto
    let inputNumero = document.getElementById("numeroTabla").value;
    
    // Si la caja está vacía por defecto, asignamos el 5 como valor base
    let numero = inputNumero === "" ? 5 : parseInt(inputNumero);

    // 2. Obtenemos el contenedor de la tabla
    let contenedor = document.getElementById("tablaMultiplicar");
    
    // 3. Creamos una variable acumuladora vacía
    let contenido = "";
    
    // 4. Usamos el bucle for para generar dinámicamente la tabla del número ingresado hasta el 12
    for (let i = 1; i <= 12; i++) {
        let resultado = numero * i; 
        contenido += `<div class="fila">${numero} × ${i} = <span>${resultado}</span></div>`;
    }
    
    // 5. Inyectamos el contenido generado dentro del contenedor
    contenedor.innerHTML = contenido;
}