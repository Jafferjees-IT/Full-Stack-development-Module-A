// Get DOM Element
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('count');
const connt = document.getElementById('total');
const movieSelect = document.getElementById('Movie');
const ticketPrice = +movieSelect.value; // if we plece + sign its convert into number

container.addEventListener('click', (e) => { // we can use function(e)  instant of (e)=> {}
    if(e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected')

    }
})  


