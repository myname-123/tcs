function callMe(){
    const passenger = {
        name:"Arun",
        age:28,
        reservedStatus: true
    }
document.write(`
    <div id="namediv"> <span id="namespan">Name:</span> <span id="name">${passenger.name}</span></div>
    <div id="agediv"> <span id="agespan">Age:</span> <span id="age">${passenger.age}</span></div>
    <div id="resstatusdiv"> <span id="resstsspan">Reservation Status:</span> <span id="reservedStatus">${passenger.reservedStatus}</span></div>
    `);
}
document.getElementById("showbutton").addEventListener("click",callMe);
