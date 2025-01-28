//const fetch = require('node-fetch');
//const moment = require('moment');
document.querySelector('#search-button').addEventListener ("click", sendInfomation);

//{ $regex: new RegExp(req.body.cityName, 'i') }
function sendInfomation () {
    let villesTrouvees=[];
    let trip = {
       departure : { $regex: new RegExp(document.querySelector('#departure').value, 'i') },
       // arrival : { $regex: new RegExp(document.querySelector('#arrival').value, 'i') },
       //date : moment(document.querySelector('#date').value).format(), 
       departure :document.querySelector('#departure').value,
        arrival :document.querySelector('#arrival').value,
        date : document.querySelector('#date').value
    };
    console.log(trip);
        
fetch('http://localhost:3000/trips',{
    
})
.then(response => response.json())
.then((data)=>{
    console.log(data.trips, "data")
    //console.log(trip.departure)
})
            }
//ajouter trajets
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

/*fetch('http://localhost:3000/trips',{
        /*method :"POST",
        headers : { "Content-type":"application/json"},
        body : JSON.stringify(trip)
    })
    .then(response => response.json())
    .then((data)=>{
        console.log(data.trips, "data")
        //console.log(trip.departure)
            if (data.trips){//.departure == trip.departure )//&& data[0][i].arrival == trip.arrival /*&& data.date == trip.date*/
                //villesTrouvees.push(data[i])
               // }})
            //}*/
      /*  if (data == Trip.find({departure : Trip.departure,
                                arrival : Trip.arrival,
                                date : Trip.date})){

                                }*/
        
    
//)}