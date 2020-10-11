
document.addEventListener("mousedown",clickOn); 
document.addEventListener("mouseup",clickOff);
document.addEventListener("mousemove",dibujar);
document.getElementById("clear").addEventListener("click",clearCanva);

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

function clearCanva()
{
    var clearCanvas = document.getElementById("canvas");
    var ctx = clearCanvas.getContext("2d");
    ctx.clearRect(0, 0, ancho, alto);
}



/*
//Misma aplicacion con reducción de codigo
document.addEventListener("mousemove",dibujarConMouse);

//Mimo aplicacion con codigo reducido
const d = document.getElementById("canvas");
const papel = d.getContext("2d");

var x= 150;
var y= 150;

function dibujarConMouse(evento){
if (evento.buttons==1) {

dibujar("black", x, y, evento.layerX, evento.layerY,papel)
console.log(evento);
}
x= evento.layerX;
y= evento.layerY;
}
function dibujar(color, x_inicial, y_inicial, x_final, y_final, lienzo) {

lienzo.beginPath();
lienzo.strokeStyle = color;
papel.lineWidth = 2;
lienzo.moveTo(x_inicial,y_inicial);
lienzo.lineTo(x_final,y_final);
lienzo.stroke();
lienzo.closePath();
}
*/
