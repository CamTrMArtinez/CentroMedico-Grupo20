function mostrarTDoctores (){
    let doctores =[]
    let localDoctores = localStorage.getItem("doctores")
    if (localDoctores){
        doctores = JSON.parse(localDoctores)
    }
    const tablaDoctores = document.getElementById("tablaDoctor")
    const cuerpoTabla = tablaDoctores.getElementsByTagName("tbody")[0]

    doctores.forEach(doctores=> {
        let fila =cuerpoTabla.insertRow()
        const celdaNombreDoctor =fila.insertCell()
        celdaNombreDoctor.textContent = doctores.nombreDoctor
        const celdaApellidoDoctor =fila.insertCell()
        celdaApellidoDoctor.textContent = doctores.apellidoDoctor
        const celdaCorreoDoctor =fila.insertCell()
        celdaCorreoDoctor.textContent = doctores.correoDoctor
        const celdaCedulaDoctor =fila.insertCell()
        celdaCedulaDoctor.textContent = doctores.cedulaDoctor
        const celdaConsultorioDoctor =fila.insertCell()
        celdaConsultorioDoctor.textContent = doctores.colsultorioDoctor
        const celdaEspecialidad =fila.insertCell()
        celdaEspecialidad.textContent = doctores.especialidad
    });
}

mostrarTDoctores()