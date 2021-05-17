// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    if ((pickup - 42)>=0) {
        return pickup -42
    } else {
        return 42 - pickup
    }
}

function distanceFromHqInFeet (pickup) {
    return distanceFromHqInBlocks(pickup) *  264
}

function distanceTravelledInFeet(start, end) {
    if (start >= end) {
        return (start - end) * 264
    } else return (end - start) * 264
}

function calculatesFarePrice(start, end) {
    let feet = distanceTravelledInFeet(start, end)
    if (feet <= 400) {
        return 0
    } else if (feet <2000) {
        return Number.parseFloat((feet-400)*0.02)
    } else if (feet <2500) {
        return 25
    } else if (feet > 2500) {
        return "cannot travel that far"
    }
}