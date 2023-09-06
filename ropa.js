const ropa = []


/*+++++++++++++++++++ BACKEND en MOCKAPI +++++++++++++++*/

let url = 'https://64f5456c2b07270f705d1ce6.mockapi.io/api/ropa/ropa';
fetch(url)
    .then(response => response.json())
    .then(data => localStorage.setItem(data, url))
    .catch(error => console.error("No se encontró la página, Inténtelo más tarde...", error));



