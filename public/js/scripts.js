// let btnguardar = document.querySelector('#btnguardar');
// btnguardar.addEventListener('click', (e) => {
//     e.preventDefault()
    // alert ("Aun no")
// });

function error(mensaje, formulario){
    let error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('alert');
    error.classList.add('alert-danger');
    formulario.prepend(error);

    setTimeout(() => {
        error.remove();
    },5000);
}

let inputs = document.getElementsByClassName('form-control')
let selects = document.getElementsByClassName('form-select')
for(i=0;i<inputs.length;i++)
{
    inputs[i].addEventListener('change', (e) => {
        e.target.classList.remove('input-vacio')
    })
}
for(i=0;i<selects.length;i++)
{
    selects[i].addEventListener('change', (e) => {
        e.target.classList.remove('input-vacio')
    })
}

let tipo = document.getElementById("tipoP")
let placa = document.getElementById("placa")
let divPlaca = document.getElementById("div-placa")

if(tipo.value == 'Coordinador(a)'){
    divPlaca.classList.add('ocultar')
}

tipo.addEventListener('change', (e) => {
    let valor = e.target.value
    if(valor == 'Coordinador(a)'){
        divPlaca.classList.add('ocultar')
        placa.value = ''
    }
    else{
        divPlaca.classList.remove('ocultar')
    }
})




function mostrarMensaje(mensaje){
    // console.log(mensaje);
    //crea un nuevo elemnto en html
    let alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');//aca se le adiciona una clase
    formulario.appendChild(alerta); //da la respuesta en parte de abajo del formulario

    setTimeout(() => {
        alerta.remove();
    },3000);
    // console.log(error);
}