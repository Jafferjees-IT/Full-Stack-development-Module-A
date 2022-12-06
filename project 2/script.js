// Get DOM Element
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('Movie');
let ticketPrice = +movieSelect.value; // if we plece + sign its convert into number

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected'); // Get Selected list
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));  //  copy selected Seats make Comma Saprated list and get seat number
    console.log(seatsIndex);
    const SelectedSeatsCount = selectedSeats.length; // Get Numbers of selected seat
    count.innerText = SelectedSeatsCount;
    total.innerText = SelectedSeatsCount *  ticketPrice;
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex)); //Json stringfy makes array to string
}

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMoiveIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);

}

// Event Listener for container to check and click on seat
container.addEventListener('click', (e) => { // we can use function(e)  instant of (e)=> {}
    if(e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected');
        
        updateSelectedCount();

    }
}) 

//Event listern for Movie pickup
movieSelect.addEventListener('change',(e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})




