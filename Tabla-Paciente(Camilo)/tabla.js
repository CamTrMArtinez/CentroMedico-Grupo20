function mostrarTPacientes (){
    let pacientes =[]
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tablaPacienes")
    const cuerpoTabla = tablaPacient.getElementsByTagName("tbody")[0]

    pacientes.forEach(pacientes=> {
        let fila =cuerpoTabla.insertRow()
        const celdaNombrePaciente =fila.insertCell()
        celdaNombrePaciente.textContent = pacientes.nombrePaciente
        const celdaApellidoPaciente =fila.insertCell()
        celdaApellidoPaciente.textContent = pacientes.apellidoPaciente
        const celdaCedulaPaciente =fila.insertCell()
        celdaCedulaPaciente.textContent = pacientes.cedulaPaciente
        const celdaEdadPaciente =fila.insertCell()
        celdaEdadPaciente.textContent = pacientes.edadPaciente
        const celdaTelefonoPaciente =fila.insertCell()
        celdaTelefonoPaciente.textContent = pacientes.telefonoPaciente 
        const celdaEspecialidad =fila.insertCell()
        celdaEspecialidad.textContent = pacientes.especialidadPaciente
    });
}

mostrarTPacientes()