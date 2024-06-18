// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34" 
let astronautCount = 7
let astronautStatus	= "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius	= -225
let minimumFuelTemp	= -300
let maximumFuelTemp	= -150
let fuelLevel = 100
let weatherStatus = "clear"
let preparedForLiftOff = true
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount <= 7){
    preparedForLiftOff = true;
}
else{
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if(astronautStatus === "ready"){
    preparedForLiftOff = true;
}
else{
    preparedForLiftOff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg <= maximumMassLimit){
    preparedForLiftOff = true;
}
else{
    preparedForLiftOff = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius >= -300 || fuelTempCelsius <= -150){
    preparedForLiftOff = true;
}
else{
    preparedForLiftOff = false;
}
// add logic below to verify the fuel level is at 100%
if(fuelLevel == 100){
    preparedForLiftOff = true;
}
else{
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if(weatherStatus === "clear"){
    preparedForLiftOff = true;
}
else{
    preparedForLiftOff = false;
}
// Verify shuttle launch can proceed based on above conditions
if(preparedForLiftOff){
    console.log("Shuttle is ready for liftoff")
    console.log("All systems are a go! Starting Countdown")
    console.log("------------------------------------------------------------")
    console.log("Date: " + date)
    console.log("Time: " + time)
    console.log("Astronauts: " + astronautCount)
    console.log("Crew Mass: " + crewMassKg + " kg")
    console.log("Fuel Mass: " + fuelMassKg + " kg")
    console.log("Shuttle Mass: " + shuttleMassKg + " kg")
    console.log("Total Mass: " + totalMassKg + " kg")
    console.log("Fuel Temp: " + fuelTempCelsius + " *C")
    console.log("Weather Status:" + weatherStatus)
    console.log("------------------------------------------------------------")
    console.log("5... 4... 3... 2... 1... 0...")

    console.log("Good luck out there astronauts")


}
else{
    console.log("Shuttle is Not ready for liftoff")
}