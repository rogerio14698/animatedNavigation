const list = document.querySelectorAll('.list');


function activeLink() {
    list.forEach((item) =>
        //Elimina la clase "active" de todos los elementos de la lista
        item.classList.remove('active'));
    //Agrega la clase "active" solo al alemento que se hizo clic
    this.classList.add('active');
}

list.forEach((item) => {
    item.addEventListener('click', activeLink);
});