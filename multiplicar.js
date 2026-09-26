function generarTablas() {
   
    let inputNumero = document.getElementById("tablaNumero").value;
    
    let numero = inputNumero === "" ? 5 : parseInt(inputNumero);

    let contenedor = document.getElementById("tablaMultiplicar");
    
    let contenido = "";
    
    for (let i = 1; i <= 12; i++) {
        let resultado = numero * i; 
        contenido += `<div class="fila">${numero} × ${i} = <span>${resultado}</span></div>`;
    }
    
    // Inyectar el contenido generado dentro del contenedor
    contenedor.innerHTML = contenido;
}