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
