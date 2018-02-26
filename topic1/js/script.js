var section = document.getElementById('section');
var xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', function() {
    section.style.visibility = 'visible';
}, false);

function ajax(data) {
    let callPromise = new Promise((resolve, reject) => {
        xhr.open(data.method, data.url);
        // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
        // En este ejemplo, usamos setTimeout(...) para simular código asíncrono. 
        // En la vida real, probablemente uses algo como XHR o una API HTML5.


        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status);
            }
        };

        // ¡Todo salió bien!

    });
    xhr.send();
    callPromise.then((successMessage) => {
            section.innerHTML += successMessage
            // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
            // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
        })
        .catch(
            // Registrar la razón del rechazo
            function(reason) {
                section.style.background = "#FC0000"
                section.innerHTML = 'Error status ' + reason2
            });
}