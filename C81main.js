var canva=document.getElementById("canva");
var ctx=canva.getContext("2d");
var color="aquamarine";
var lastx="";
var lasty="";
var gros=1;
var figures="";
var ancho=screen.width;
var newanch=screen.width-70;
var newalt=screen.height-300;
if(ancho < 992){
    canva.width=newanch;
    canva.height=newalt;
    document.body.style.overflow="hidden";
}
canva.addEventListener("touchstart", inicio);
function inicio (e){
    color=document.getElementById("color").value;
    gros=document.getElementById("grosor").value;
    figures=document.getElementById("figura").value;
 lastx=e.touches[0].clientX-canva.offsetLeft;
 lasty=e.touches[0].clientY-canva.offsetTop;
}
canva.addEventListener("touchmove", movement);
function movement (e){
    var actx=e.touches[0].clientX-canva.offsetLeft;
    var acty=e.touches[0].clientY-canva.offsetTop;
        if(figures==""){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=gros;
        ctx.moveTo(lastx, lasty);
        ctx.lineTo(actx, acty);
        ctx.stroke();
        lastx=actx;
    lasty=acty;
        }
    }
    
canva.addEventListener("mousedown",circled);
function circled (e){
    posx=e.clientX-canva.offsetLeft;
    posy=e.clientY-canva.offsetTop;
    dibujar(posx,posy);
    }
    function dibujar(){
        if(figures=="circulo"){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=gros;
            ctx.arc(posx,posy,40,0,2*Math.PI);
            ctx.stroke();
        }
        if(figures=="cuadrado"){
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=gros;
            ctx.rect(posx,posy,50,50);
            ctx.stroke();
        }
    }

function boton(){
    ctx.clearRect(0,0,canva.width, canva.height);
}
