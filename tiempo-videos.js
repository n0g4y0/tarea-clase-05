document.querySelector('#calcular-total').onclick = function(){
    
  const segundosIngresados = Number(document.querySelector("#datos-segundos").value);
  const minutosIngresados = Number(document.querySelector("#datos-minutos").value);
  const horasIngresadas = Number(document.querySelector("#datos-horas").value);

  let horasTotales = Number((document.querySelector("#total-horas").textContent));
  let minutosTotales = Number((document.querySelector("#total-minutos").textContent));
  let segundosTotales = Number((document.querySelector("#total-segundos").textContent));

  function agregarTiempoVideo(hora, minuto, segundo){

    let nuevoDiv = document.createElement("input");
    //let nuevoContenido = document.createTextNode("hola que tal");
    let inputHora = document.createElement("input");
    inputHora.type = "number";
    inputHora.value = hora;
    inputHora.readOnly = true;

    let p = document.createElement("p");

    let inputMinuto = document.createElement("input");
    inputMinuto.type = "number";
    inputMinuto.value = minuto;
    inputMinuto.readOnly = true;

    let inputSegundo = document.createElement("input");
    inputSegundo.type = "number";
    inputSegundo.value = segundo;
    inputSegundo.readOnly = true;

    let contenedor = document.querySelector("#contenedor");
    contenedor.appendChild(p);
    contenedor.appendChild(inputHora);
    contenedor.appendChild(p);
    contenedor.appendChild(inputMinuto);
    contenedor.appendChild(p);
    contenedor.appendChild(inputSegundo);
    contenedor.appendChild(p);
    

  }

  agregarTiempoVideo(horasIngresadas,minutosIngresados,segundosIngresados);

  


  if(horasTotales === 0 && minutosTotales === 0 && segundosTotales === 0){
    horasTotales += horasIngresadas;
    minutosTotales += minutosIngresados;
    segundosTotales += segundosIngresados;
  }else{

    let segundosTemporales = segundosIngresados + segundosTotales;

    minutosTotales += Math.trunc(segundosTemporales / 60);
    segundosTotales = Math.trunc(segundosTemporales % 60);
  
    let minutosTemporales = minutosIngresados + minutosTotales;
  
    horasTotales += Math.trunc(minutosTemporales / 60);
    minutosTotales = Math.trunc(minutosTemporales % 60);
  
    let horasTemporales = horasIngresadas + horasTotales;
  
    horasTotales += horasIngresadas;

  }

  document.querySelector("#total-horas").textContent = horasTotales;
  document.querySelector("#total-minutos").textContent = minutosTotales;
  document.querySelector("#total-segundos").textContent = segundosTotales;

  //document.querySelector("#tiempo-total").innerHTML = `Horas: ${horasTotales}, Minutos: ${minutosTotales}, Segundos: ${segundosTotales} `;

  console.log(horasTotales);

  return false;
}

