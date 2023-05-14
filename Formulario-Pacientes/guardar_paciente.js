const formularioPacientes = document.getElementById('registro_pacientes-form');
formularioPacientes.addEventListener('submit', (event) => {
    event.preventDefault();
    const datosPacientes = {//objeto
        nombrePaciente: document.getElementById('nombre').value,
        apellidoPaciente: document.getElementById('apellido').value,
        cedulaPaciente: document.getElementById('cedula').value,
        edadPaciente: document.getElementById('edad').value,
        telefonoPaciente: document.getElementById('telefono').value,
        especialidad: document.getElementById('especialidad').value,
    };
    const pacientesCookie = getCookie('pacientes') ? JSON.parse(getCookie('pacientes')) : [];
    //¿hay algun paciente con la especialidad? si si me devuleve true sino false
    const existePacientes = pacientesCookie.some(pacientes => pacientes.especialidad === datosPacientes.especialidad);
    if (existePacientes) {
        alert("Ya existe un paciente para esta especialidad");
    } else {
        guardarEnCookie(datosPacientes);
    }
    const confirmacion = confirm('¿Desea ver los datos o seguir añadiendo pacientes?');
    if (confirmacion) {
        window.location.href = 'pacientes.html';
    } else {
        console.log('Continuando en el formulario');
        formularioPacientes.reset()
    }
});
// Función para guardar una medico en la cookie
function guardarEnCookie(pacientes) {
    // Obtener los datos de la cookie actual
    let datosPacientes = getCookie("pacientes");
    // Si la cookie está vacía, inicializarla como un arreglo vacío
    if (datosPacientes === "") {
        datosPacientes = "[]";
    }
    // Convertir la cookie en un arreglo de objetos
    const pacientes = JSON.parse(datosPacientes);
    // Agregar la nueva medico al arreglo
    pacientes.push(pacientes);
    // Convertir el arreglo de medicos de nuevo a un JSON
    const nuevoJSON = JSON.stringify(pacientes);
    // Guardar el JSON en la cookie
    setCookie("pacientes", nuevoJSON);
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

// Función para guardar datos en la cookie
function setCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}