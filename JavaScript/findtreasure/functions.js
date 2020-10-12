let getRandomNumber = size => {
    return Math.floor((Math.random() * size)+1);
}

//Obtener la distancia de dos puntos
let getDistance = (e,target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    console.log("Click: " + e.offsetX+","+e.offsetY);
    let x = Math.floor (Math.sqrt((diffX * diffX) + (diffY + diffY))); /*Toerema de pitagoras*/
    return x;
}

let getDistanceHint = distance => {
    if (distance < 30){
        return "Casi lo encuentras!";
    }
    else if (distance < 40){
        return "Estas muy cerca...";
    }
    else if (distance < 60){
        return "Ya vas acercandote...";
    }
    else if (distance < 100){
        return "Estas lejos";
    }
    else if (distance < 180){
        return "Estas muy lejos!";
    } 
    else if (distance < 250){
        return "Estas perdido!";
    }   
    else if (distance < 350){
        return"No tienes idea de donde esta!";
    }
    else if (distance >=350) {
        return "Sabes que es un tesoro?";
    }
}