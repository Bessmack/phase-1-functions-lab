// Code your solution in this file!
function distanceFromHqInBlocks(value){
    let d = value > 42;
    if (d) {
        return value - 42;
    }
    else {
        return 42 - value;
    }
}

function distanceFromHqInFeet(distance){
    if (distance > 42) {
        return (distance - 42) * 264;
    }
    else {
        return (42 - distance) * 264;
    }
}

function distanceTravelledInFeet(start, destination){
    let d = destination > start;
    if(d){
        return (destination  - start ) * 264;
    }
    else{
        return (start - destination ) * 264;
}
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264;

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
