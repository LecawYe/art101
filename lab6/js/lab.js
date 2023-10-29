/**
 * Author: Yihan Wang
 * Created: 28 October 2023
 *
 * (c) Copyright by Yihan Wang.
 **/


// Define Variables
var myTransport = ["legs", "bus", "bike", "2022 Volkswagen Taos", "Train", "Subway", "airplane"];

//create an object for my main ride
myMainRide = {
  make:"Volkswagen", 
  model: "Taos", 
  color: "White",
  year:2022,
}

//output
document.writeln("Different kind transportion I use" + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
