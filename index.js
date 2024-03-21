function distanceFromHqInBlocks(someValue){
    const hq=42
    if (someValue>hq) {
        return (someValue-hq)
    } else {
        return (hq-someValue)
    }

} 

function distanceFromHqInFeet(someValue) { 
   const hq=42
    if (someValue>hq) {
        return (someValue-hq)*264
    } else {
        return (hq-someValue)*264
    }

} 

function distanceTravelledInFeet(hq, someValue) {
    if (someValue>hq) {
        return (someValue-hq)*264
    } else {
        return (hq-someValue)*264
    }

}


function calculatesFarePrice(hq, someValue) {
    if (distanceTravelledInFeet(hq, someValue) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(hq, someValue) > 400 && distanceTravelledInFeet(hq, someValue) <= 2000 ) {
        return ((distanceTravelledInFeet(hq, someValue) - 400) * 0.02);
    } else if (distanceTravelledInFeet(hq, someValue) > 2000 && distanceTravelledInFeet(hq, someValue) < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}