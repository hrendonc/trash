const WIDTH = 400;
const EIGHT = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(EIGHT)
};

let $map = document.getElementById('map'); // El simbolo $ es para saber que estamos usando una variable que referencía a HTML
let $distance = document.getElementById('distance');
let clickCount=0;

$map.addEventListener('click', function(e) {
    clickCount++;
    let distance = getDistance(e,target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML=distanceHint;

    console.log("Target:" + target.x + "," + target.y)
    console.log("Distancia Actual:" + distance);
    
    if (distance <= 10){
        alert(`encontraste el tesoro en ${clickCount} Clicks!`);
        location.reload(); //Refresca la pagina
    }
});