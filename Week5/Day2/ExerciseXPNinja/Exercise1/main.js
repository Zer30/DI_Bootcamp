// 2
function calculateTip() {}

let billAmount = document.getElementById("billamt");

let serviceQuality = document.getElementById("serviceQual");

let numberOfPeople = document.getElementById("peopleamt");

if (billAmount.value === "" || serviceQuality.value == 0) {
  alert("Please enter values");
}

if (numberOfPeople.value === "" || numberOfPeople.value <= 1) {
  numberOfPeople.value = 1;
  document.getElementById("each").style.display = "none";
}

let total = (billAmount.value * serviceQuality.value) / numberOfPeople.value;

document.getElementById("totalTip").style.display = "block";

document.getElementById("tip").innerHTML = total.toFixed(2);

document.getElementById("totalTip").style.display = "none";

document.getElementById("calculate").onclick = calculateTip;
