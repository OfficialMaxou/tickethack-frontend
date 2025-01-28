document.querySelector('#search-button').addEventListener ("click", sendInfomation);


function sendInfomation () {
    let trip = {
        departure : document.querySelector('#departure').value,
        arrival : document.querySelector('#arrival').value,
        date : document.querySelector('#date').value,
    };

    fetch('http://localhost:3000/trips',{
        method :"POST",
        headers : { "Content-type":"application/json"},
        body : JSON.stringify(trip)
    })
    .then(response => response.json())
    .then((data)=>{
        console.log(data)
      /*  if (data == Trip.find({departure : Trip.departure,
                                arrival : Trip.arrival,
                                date : Trip.date})){

                                }*/
        
    })
}


function generateTrip (villesTrouvees,departure, arrival, hour, price) {
    for (let i=0; i<villesTrouvees.length; i++){
        document.querySelector('#results').innerHTML =
        `<div class = "trip">
            <span id ="span-dep">${departure}</span>
            <span id ="span-chapeau">'chapeau'</span>
            <span id ="span-arr">${arrival}</span>
            <span id ="span-hour">${hour}</span>
            <span id ="span-price">${price}</span>
            <span class='delete'><button type="button" id="delete-button">Book</button></span>
        </div>`
    }
}