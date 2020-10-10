var tecla = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};

document.addEventListener("keyup",dibujarTeclado);

var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("blue", x-1,y-1,x+1,y+1, papel); //Creamos un punto donde iniciar a dibujar

function dibujarTeclado(e)
{
    var colorcito = "blue"; //Color del dibujo
    var movimiento = 5; //Cantidad de pixeles en el movimiento

    switch(e.keyCode)
    {
        case tecla.UP:
            dibujarLinea(colorcito,x,y,x,y-movimiento, papel);
            y = y-movimiento;
            break;
        case tecla.DOWN:
            dibujarLinea(colorcito,x,y,x,y+movimiento, papel);
            y = y+movimiento;
            break;
        case tecla.LEFT:
            dibujarLinea(colorcito,x,y,x-movimiento,y, papel);
            x = x-movimiento;
            break;
        case tecla.RIGHT:
            dibujarLinea(colorcito,x,y,x+movimiento,y, papel);
            x = x+movimiento;
            break;
        default:
            console.log("Otra tecla");
            break;
    }
}