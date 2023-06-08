const formulario = document.getElementById("formRegistroD")
const nombreDoctor =document.getElementById("nombres")
const apellidoDoctor =document.getElementById("apellidos")
const cedulaDoctor=document.getElementById("cedula")
const correoDoctor =document.getElementById("correo")
const colsultorioDoctor =document.getElementById("colsultorio")
const especialidad =document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const objetoDoctor ={
        nombreDoctor: nombreDoctor.value,
        apellidoDoctor: apellidoDoctor.value,
        cedulaDoctor: cedulaDoctor.value,
        correoDoctor: correoDoctor.value,
        colsultorioDoctor:colsultorioDoctor.value,
        especialidad: especialidad.value,
    }
    let doctores=[]
    let localDoctores = localStorage.getItem("doctores")
    if(localDoctores){
        doctores= JSON.parse (localDoctores)
    }
    doctores.push(objetoDoctor)
    localStorage.setItem("doctores", JSON.stringify(doctores))
    formulario.reset()
    alert("Registrado con exito")

})