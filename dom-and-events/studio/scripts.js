// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

    const takeoff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    let rocket = document.getElementById("rocket");
    let status = document.getElementById("flightStatus");
    let backgroundColor = document.getElementById("shuttleBackground")
    let shuttleHeight = document.getElementById("spaceShuttleHeight")
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");


    rocket.style.position = "absolute"
    rocket.style.bottom = "0px"
    rocket.style.left = "230px"


    takeoff.addEventListener("click", event => {

        if(status.innerHTML !== "Shuttle in flight"){
            if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            status.innerHTML = "Shuttle in flight"
            backgroundColor.style.backgroundColor = "blue"
            shuttleHeight.innerHTML = "10,000"
            rocket.style.bottom = parseInt(rocket.style.bottom) + 100 + "px"
        }
        }
        
    });

land.addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.")
    status.innerHTML = "The shuttle has landed."
    backgroundColor.style.backgroundColor = "green"
    shuttleHeight.innerHTML = "0"
    rocket.style.bottom = "0px"
});

if(parseInt(rocket.style.bottom) + "px" <= 400 + "px" && parseInt(rocket.style.bottom) + "px" >= 0 + "px"){
    up.addEventListener('click', event => {
    rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px"
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000
})

down.addEventListener('click', event => {
    rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px"
    shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000
})
}


left.addEventListener('click', event => {
    rocket.style.left = parseInt(rocket.style.left) - 10 + "px"
})

right.addEventListener('click', event => {
    
    rocket.style.left = parseInt(rocket.style.left) + 10 + "px"
})



});
