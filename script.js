// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         let div = document.getElementById("missionTarget");
         const randIndex = Math.floor(Math.random() * json.length)
         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randIndex].name}</li>
               <li>Diameter: ${json[randIndex].diameter}</li>
               <li>Star: ${json[randIndex].star}</li>
               <li>Distance from Earth: ${json[randIndex].distance}</li>
               <li>Number of Moons: ${json[randIndex].moons}</li>
            </ol>
         <img src="${json[randIndex].image}">
         `;
      });
   });

   let pilot = document.getElementById("pilotStatus");
   let copilot = document.getElementById("copilotStatus");
   let fuel = document.getElementById("fuelStatus");
   let cargo = document.getElementById("cargoStatus");
   let form = document.querySelector("form");
   let update = document.getElementById("faultyItems");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         alert("Make sure to enter valid information for each field!");
      } else if (isNaN(fuelLevel.value)) {
         alert("Fuel Level must be a number");
      } else if (isNaN(cargoMass.value)) {
         alert("Cargo Mass must be a number");
      } else if(fuelLevel.value < 10000 && cargoMass.value > 10000){
         pilot.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilot.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         update.style.visibility = "visible";
         fuel.innerHTML = "Fuel level is too low for launch";
         cargo.innerHTML = "Cargo mass is too heavy for launch";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color = "red";
      } else if(fuelLevel.value > 10000 && cargoMass.value > 10000){
         pilot.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilot.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         update.style.visibility = "visible";
         fuel.innerHTML = "Fuel level is good for launch";
         cargo.innerHTML = "Cargo mass is too heavy for launch";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color = "red";
      } else if (fuelLevel.value < 10000 && cargoMass.value <= 10000){
         pilot.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilot.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         update.style.visibility = "visible";
         cargo.innerHTML = "Cargo mass is good for launch";
         fuel.innerHTML = "Fuel level is too low for launch";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color = "red";
      } else {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle Is Ready For Launch";
         pilot.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilot.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         fuel.innerHTML = "Fuel level is good for launch";
         cargo.innerHTML = "Cargo mass is good for launch";
      }
   });
});

