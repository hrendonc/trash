
document.addEventListener("mousedown",clickOn); 
document.addEventListener("mouseup",clickOff);
document.addEventListener("mousemove",dibujar);

/* (Este codigo ya no es necesario, se realizará la misma accion pero con css)
// Borde de Canvas
dibujarLinea("blue", 0, 0, 300, 0, papel)
dibujarLinea("blue", 300, 0, 300, 300, papel)
dibujarLinea("blue", 300, 300, 0, 300, papel)
dibujarLinea("blue", 0, 300, 0, 0, papel)
*/

//Canvas a pantalla completa
var lienzo = document.getElementById("canvas");

function pantallaCompleta() {
    lienzo.style.width = window.innerWidth + "px";
    lienzo.style.height = window.innerHeight + "px";

    alto = window.innerHeight;
    ancho = window.innerWidth;

    console.log('Ancho de la pantalla: ' + window.innerWidth);
    console.log('Alto de la pantalla: ' + window.innerHeight);
}

pantallaCompleta();

document.getElementById("canvas").setAttribute("width",ancho);
document.getElementById("canvas").setAttribute("height",alto);

const colorcito = "brown";
const area = document.getElementById("canvas");
const papel = area.getContext("2d");
let x,y;
let click=0;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, papel)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 2;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath();
}

function dibujar(e)
{
    if(click == 1)
    {
        dibujarLinea(colorcito, x, y, e.layerX, e.layerY, papel);
    }
    x = e.layerX;
    y = e.layerY;
}

function clickOn(e)
{
    console.log(e.layerX + "," + e.layerY);
    click = 1;
    x = e.layerX;
    y = e.layerY;
}

function clickOff(e)
{
    //console.log(e.layerX + "," + e.layerY);
    click = 0;
    x = e.layerX;
    y = e.layerY;
}