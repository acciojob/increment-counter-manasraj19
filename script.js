let counterElem = document.getElementById("counter");
let IncrementButton = document.getElementById("incrementBtn");

let counterValue = 0;

function incrementCounter(){
	alert("un-incremented value" + counterValue);
	counterValue++;
	counterElem.textContent = counterValue;
	
}
IncrementButton.addEventListener("click", incrementCounter);