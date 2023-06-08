const formulario = document.getElementById("formRegistro")
const nombrePaciente =document.getElementById("nombres")
const apellidoPaciente =document.getElementById("apellidos")
const cedulaPaciente =document.getElementById("cedula")
const edadPaciente =document.getElementById("edad")
const telefonoPaciente =document.getElementById("telefono")
const especialidadPaciente =document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const objetoPaciente ={
        nombrePaciente: nombrePaciente.value,
        apellidoPaciente: apellidoPaciente.value,
        cedulaPaciente: cedulaPaciente.value,
        edadPaciente: edadPaciente.value,
        telefonoPaciente: telefonoPaciente.value,
        especialidadPaciente: especialidadPaciente.value,
    }
    let pacientes=[]
    let localPacientes = localStorage.getItem("pacientes")
    if(localPacientes){
        pacientes= JSON.parse (localPacientes)
    }
    pacientes.push(objetoPaciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert("Paciente registrado con exito")

})