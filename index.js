// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    return Math.abs(42 - value);
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(value1, value2) {
    return Math.abs(value1 - value2) * 264
}

function calculatesFarePrice(value1, value2) {
    let distance = distanceTravelledInFeet(value1, value2);
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}