var section = document.getElementById('section');
var xhr = new XMLHttpRequest();
var urlParams = new URLSearchParams(window.location.search);
var results = [];

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


    });
    xhr.send();
    callPromise.then((successMessage) => {
            let url = data.url
            let auxData = JSON.parse(successMessage);
            let toSearch = 'https://'
            if (url.indexOf('q=JavaScript') > -1) {
                console.log('0')
                let ul = document.getElementById("list");
                let li = document.createElement("li");
                console.log(auxData)
                for (var i = auxData.items.length - 1; i >= 0; i--) {
                    let repositories = Object.values(auxData.items[i])
                    console.log(repositories)
                    for (var e = repositories.length - 1; e >= 0; e--) {
                        
                        if (String(repositories[e]).match(toSearch)) {
                            li.appendChild(document.createTextNode(repositories[e]));
                            ul.appendChild(li);
                        }
                    }


                }
            } else {
                section.innerHTML += successMessage
            }
            // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
            // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
        })
        .catch(
            // Registrar la razón del rechazo
            function(reason) {
                section.style.background = "#FC0000"
                section.innerHTML = 'Error status ' + reason
            });
}