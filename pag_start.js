function agregarRegistro(){
    let registros = [];
    
    let nombre = document.getElementById("correoOriginal").value;
    let fecha = document.getElementById("Nombre").value;
    let descripcion = document.getElementById("floatingPassword").value;

    if (!nombre || !fecha || !descripcion) {
        alert("Los campos no pueden quedarse vacíos");
        return;
    } else {
        window.location.href = "inicio_sesion.html";
    }

    let registro = {
        nombre: nombre,
        // fecha: fecha,
        // descripcion: descripcion
    };

    registros.push(registro);

    // Para actualizar la tabla
    //mostrarRegistros();

    // Para limpiar los input
    document.getElementById("nombre").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("descripcion").value = "";
}

/*function mostrarRegistros() {
    let tablaDatos = document.getElementById("tablaDatos");

    // Limpia la tabla antes de actualizarla
    tablaDatos.innerHTML = "";

    // Agregar cada registro al cuerpo de la tabla
    registros.forEach(function (registro, index) {
        let fila = "<tr><td><p>Nombre del video juego: " + registro.nombre + "<br></td><td><p>Fecha de estreno: " + registro.fecha + "<br></td><td><p>Descripción: " + registro.descripcion + "<br></td>";
        fila += "<br><td><button class='edit' onclick='editarRegistro(" + index + ")'>Editar</button></td> ";
        fila += " <td><button class='borr' onclick='eliminarRegistro(" + index + ")'>Eliminar</button></td></tr>";
        tablaDatos.innerHTML += fila;
        // modal_close();
    });
}

// // Función para editar un registro
// function editarRegistro(index) {
//     // Obtener el registro según el índice proporcionado
//     let registro = registros[index];

//     // Mostrar los datos del registro en los input's para editarlos
//     document.getElementById("nombre").value = registro.nombre;
//     document.getElementById("fecha").value = registro.fecha;
//     document.getElementById("descripcion").value = registro.descripcion;

//     // Remover el registro del arreglo
//     registros.splice(index, 1);

//     // Actualizar la tabla
//     mostrarRegistros();
// }

//eliminar un registro
function eliminarRegistro(index) {
    // Remover el registro del arreglo según el índice proporcionado
    registros.splice(index, 1);

    // Actualizar la tabla
    mostrarRegistros();
}

function eliminarTodos() {
    registros = [];

    // Actualizar la tabla
    mostrarRegistros();
}

window.onload = function () {
    mostrarRegistros();
};
let modal_open=()=>{
    modal.showModal();
};
  
  let modal_close=()=>{
    modal.close(); 
  }; */