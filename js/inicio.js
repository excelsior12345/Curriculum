"use strict";
function validar1() {
    const primero = document.getElementById("primero");
    const segundo = document.getElementById("segundo");
    const lcv = document.getElementById("lcv");
    let nusuario = document.getElementById("usuario");
    let pass = document.getElementById("pass");
    let comprobacion = document.getElementById("comprobacion");
    let cusuario = document.getElementById("cusuario");
    let cpass = document.getElementById("cpass");
    if (nusuario.value != "josue") {
        cusuario.innerHTML = "El nombre de usuario es incorrecto";
        cusuario.style.color = 'red';
    }
    if (nusuario.value == "") {
        cusuario.innerHTML = "Introduce usuario";
        cusuario.style.color = 'red';
    }
    if (pass.value != "1234") {
        cpass.innerHTML = "La contraseña es incorrecta";
        cpass.style.color = 'red';
    }
    if (pass.value == "") {
        cpass.innerHTML = "Introduce contraseña";
        cpass.style.color = 'red';
    }
    if (nusuario.value == "josue" && pass.value == "1234") {
        primero.style.visibility = 'hidden';
        primero.style.display = 'none';
        segundo.style.visibility = 'visible';
        segundo.style.display = 'block';
    }
}
function crear() {
    const segundo = document.getElementById("segundo");
    const tercero = document.getElementById("tercero");
    const lcv = document.getElementById("lcv");
    let nombre = document.getElementById("nombre");
    let img1 = document.getElementById("img1");
    let apellido = document.getElementById("apellido");
    let edad = document.getElementById("edad");
    let tel = document.getElementById("tel");
    let experiencia = document.getElementById("experiencia");
    let sobre = document.getElementById("sobre");
    let img = document.getElementById("img");
    let rnombre = document.getElementById("rnombre");
    let inc = document.getElementById("inc");
    let redad = document.getElementById("redad");
    let rtelefono = document.getElementById("rtelefono");
    let rexperiencia = document.getElementById("rexperiencia");
    let rsobremi = document.getElementById("rsobremi");
    let rellena = document.getElementById("rellena");
    if (nombre.value == "") {
        rellena.innerHTML = "Rellena todos los campos correctamente";
        rellena.style.color = 'red';
    }
    if (edad.value == "") {
        rellena.innerHTML = "Rellena todos los campos correctamente";
        rellena.style.color = 'red';
    }
    if (apellido.value == "") {
        rellena.innerHTML = "Rellena todos los campos correctamente";
        rellena.style.color = 'red';
    }
    if (sobre.value == "") {
        rellena.innerHTML = "Rellena todos los campos correctamente";
        rellena.style.color = 'red';
    }
    if (experiencia.value == "") {
        rellena.innerHTML = "Rellena todos los campos correctamente";
        rellena.style.color = 'red';
    }
    else if (nombre.value != "" && apellido.value != "" && edad.value != "" && tel != "" && sobre != "" && experiencia.value != "") {
        segundo.style.visibility = 'hidden';
        segundo.style.display = 'none';
        lcv.style.visibility = 'hidden';
        tercero.style.visibility = 'visible';
        tercero.style.display = 'block';
        inc.style.display = 'none';
        img1.src = img.value;
        rnombre.innerHTML = `${nombre.value} ${apellido.value}`;
        redad.innerHTML = "Edad " + edad.value;
        rtelefono.innerHTML = "Telefono " + tel.value;
        rexperiencia.innerHTML = experiencia.value;
        rsobremi.innerHTML = sobre.value;
    }
}
