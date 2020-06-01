document.querySelector('#calcular-total').onclick = function(){

  function sumatoriaTiempo(nombreClase){

    const datos = document.querySelectorAll(nombreClase);
    console.log(datos);
    let totalValor = 0;

    for(let i=0; i < datos.length ; i++){

      totalValor += Number(datos[i].value);

    }

    console.log(totalValor);

    return totalValor;


  }


    
  const segundosIngresados = sumatoriaTiempo(".datos-segundos");
  const minutosIngresados = sumatoriaTiempo(".datos-minutos");
  const horasIngresadas = sumatoriaTiempo(".datos-horas");

  let horasTotales = 0;
  let minutosTotales = 0;
  let segundosTotales = 0;

  

  

  let segundosTemporales = segundosIngresados;

  


  

    

    minutosTotales += Math.trunc(segundosTemporales / 60);
    segundosTotales = Math.trunc(segundosTemporales % 60);
  
    let minutosTemporales = minutosIngresados + minutosTotales;
  
    horasTotales += Math.trunc(minutosTemporales / 60);
    minutosTotales = Math.trunc(minutosTemporales % 60);
  
    let horasTemporales = horasIngresadas + horasTotales;
  
    horasTotales += horasIngresadas;

  

  document.querySelector("#total-horas").textContent = horasTotales;
  document.querySelector("#total-minutos").textContent = minutosTotales;
  document.querySelector("#total-segundos").textContent = segundosTotales;

  //document.querySelector("#tiempo-total").innerHTML = `Horas: ${horasTotales}, Minutos: ${minutosTotales}, Segundos: ${segundosTotales} `;

  console.log(horasTotales);

  return false;
}

