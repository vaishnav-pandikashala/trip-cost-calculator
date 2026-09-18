function calculateCost() {

    let distance = parseFloat(document.getElementById("distance").value);
    let mileage = parseFloat(document.getElementById("mileage").value);
    let fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
    let passengers = parseInt(document.getElementById("passengers").value);
    let toll = parseFloat(document.getElementById("toll").value) || 0;
    let other = parseFloat(document.getElementById("other").value) || 0;

    let roundTrip = document.getElementById("roundTrip").checked;

    if (!distance || !mileage || !fuelPrice || !passengers) {
        alert("Please enter all required details.");
        return;
    }

    // Double distance for round trip
    if (roundTrip) {
        distance = distance * 2;
    }

    // Calculate fuel required
    let fuelRequired = distance / mileage;

    // Calculate fuel cost
    let fuelCost = fuelRequired * fuelPrice;

    // Extra expenses
    let extraCost = toll + other;

    // Total cost
    let totalCost = fuelCost + extraCost;

    // Cost per person
    let perPerson = totalCost / passengers;

    // Display results
    document.getElementById("resultDistance").innerText =
        distance.toFixed(1) + " km";

    document.getElementById("fuelRequired").innerText =
        fuelRequired.toFixed(2) + " L";

    document.getElementById("fuelCost").innerText =
        "₹" + fuelCost.toFixed(2);

    document.getElementById("extraCost").innerText =
        "₹" + extraCost.toFixed(2);

    document.getElementById("totalCost").innerText =
        "₹" + totalCost.toFixed(2);

    document.getElementById("perPersonCost").innerText =
        "₹" + perPerson.toFixed(2);
}


function resetCalculator() {

    document.getElementById("distance").value = "";
    document.getElementById("mileage").value = "";
    document.getElementById("fuelPrice").value = "";
    document.getElementById("passengers").value = "1";
    document.getElementById("toll").value = "0";
    document.getElementById("other").value = "0";
    document.getElementById("roundTrip").checked = false;

    document.getElementById("resultDistance").innerText = "0 km";
    document.getElementById("fuelRequired").innerText = "0 L";
    document.getElementById("fuelCost").innerText = "₹0";
    document.getElementById("extraCost").innerText = "₹0";
    document.getElementById("totalCost").innerText = "₹0";
    document.getElementById("perPersonCost").innerText = "₹0";
}