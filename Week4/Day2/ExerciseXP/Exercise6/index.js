// hotel cost
function hotelCost() {
    let nights;
    while (true) {
        nights = prompt("How many nights would you like to stay in the hotel?");
        if (nights && !isNaN(nights)) {
            nights = Number(nights);
            break;
        }
    }
    return nights * 140;
}

// plane ride cost
function planeRideCost() {
    let destination;
    while (true) {
        destination = prompt("What is your destination?");
        if (destination && isNaN(destination)) {
            break;
        }
    }
    if (destination.toLowerCase() === "london") {
        return 183;
    } else if (destination.toLowerCase() === "paris") {
        return 220;
    } else {
        return 300;
    }
}

// rental car cost
function rentalCarCost() {
    let days;
    while (true) {
        days = prompt("How many days would you like to rent the car?");
        if (days && !isNaN(days)) {
            days = Number(days);
            break;
        }
    }
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // Apply 5% discount
    }
    return cost;
}

// total vacation cost
function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    return total;
}

console.log(`Total vacation cost: $${totalVacationCost()}`);
