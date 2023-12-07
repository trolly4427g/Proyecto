function cambio() {
  var cantidad = document.querySelector("#cantidadp").value;
  if (cantidad == "1") {
    document.getElementById("1").style.display = "flex";
    document.getElementById("2").style.display = "flex";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
  } else if (cantidad == "2") {
    document.getElementById("1").style.display = "flex";
    document.getElementById("2").style.display = "flex";
    document.getElementById("3").style.display = "flex";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
  } else if (cantidad == "3") {
    document.getElementById("1").style.display = "flex";
    document.getElementById("2").style.display = "flex";
    document.getElementById("3").style.display = "flex";
    document.getElementById("4").style.display = "flex";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
  } else if (cantidad == "4") {
    document.getElementById("1").style.display = "flex";
    document.getElementById("2").style.display = "flex";
    document.getElementById("3").style.display = "flex";
    document.getElementById("4").style.display = "flex";
    document.getElementById("5").style.display = "flex";
    document.getElementById("6").style.display = "flex";
    document.getElementById("7").style.display = "flex";
    document.getElementById("8").style.display = "flex";
  } else {
  }
}


function activar(rellenarId) {
  let activo = document.getElementById(rellenarId);

  if (activo) {
    if (activo.style.display === "none") {
      activo.style.display = "block"; // Suponiendo que deseas mostrar el campo de entrada de texto
    } else {
      activo.style.display = "none";
      dinero(); // Llamar a la función dinero cuando se desactive un elemento
    }
  }
}

function dinero() {
  let ocup = document.querySelector('#ocupacion').value;

  if (ocup === '1') {
    let desayuno = document.getElementById('checkDesayuno').checked ? 700 : 0;
    let comida = document.getElementById('checkComida').checked ? 1650 : 0;
    let cena = document.getElementById('checkCena').checked ? 1100 : 0;
    let alojamiento = document.getElementById('checkAlojamiento').checked ? 3300 : 0;

    document.getElementById('rellenarDesayuno').value = desayuno > 0 ? 'RD$' + desayuno : '';
    document.getElementById('rellenarComida').value = comida > 0 ? 'RD$' + comida : '';
    document.getElementById('rellenarCena').value = cena > 0 ? 'RD$' + cena : '';
    document.getElementById('rellenarAlojamiento').value = alojamiento > 0 ? 'RD$' + alojamiento : '';

    let resultado = desayuno + comida + cena + alojamiento;
    document.getElementById('resultado').value = resultado > 0 ? 'RD$' + resultado : '';

  } else {
    
  }
}