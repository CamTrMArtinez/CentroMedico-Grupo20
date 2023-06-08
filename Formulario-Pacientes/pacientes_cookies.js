//cargar los datos de la cookie
const pacientesCookie = JSON.parse(getCookie('pacientes'));
const tablaPacientes = document.getElementById("tabla-pacientes");
const cuerpoTabla = tablaPacientes.querySelector("tbody");
//length tamaño del arreglo
for (let i = 0; i < pacientesCookie.length; i++) {
    const pacientes = pacientesCookie[i];
    const fila = cuerpoTabla.insertRow();
    const nombrePacientes = fila.insertCell();
    nombrePacientes.textContent = pacientes.nombrePacientes;
    const apellidoPacientes = fila.insertCell();
    apellidoPacientes.textContent = pacientes.apellidoPacientes;
    const cedulaPacientes = fila.insertCell();
    cedulaPacientes.textContent = pacientes.cedulaPacientes;
    const edadPacientes = fila.insertCell();
    edadPacientes = fila.insertCell();
    const telefonoPacientes = fila.insertCell();
    telefonoPacientes.textContent = pacientes.telefonoPacientes;
    const especialidad = fila.insertCell();
    especialidad.textContent = pacientes.especialidad;
}


// Función para obtener los datos de la cookie
function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}