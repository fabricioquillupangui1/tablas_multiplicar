function generarTablas() {
   
    let inputNumero = document.getElementById("numeroTabla").value;
    
    let numero = inputNumero === "" ? 5 : parseInt(inputNumero);

    let contenedor = document.getElementById("tablaMultiplicar");
    
    let contenido = "";
    
    for (let i = 1; i <= 13; i++) {
        let resultado = numero * i; 
        contenido += `<div class="fila">${numero} × ${i} = <span>${resultado}</span></div>`;
    }
    
    // 5. Inyectamos el contenido generado dentro del contenedor
    contenedor.innerHTML = contenido;
}