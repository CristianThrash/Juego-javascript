var comienza = false;
var puntaje=0;
var M=false;
function iniciar() {
    puntaje=0;
    document.getElementById(999).firstChild.data =puntaje ;
    reiniciar();
    var A = aleatorio(16);
    var B = aleatorio(A);
    document.getElementById(A).firstChild.data = '2';
    document.getElementById(B).firstChild.data = '2';
    comienza = true;
    //window.alert(comienza);
}
function inicioID() {
    reiniciar();
    document.getElementById(0).firstChild.data = 2;
    document.getElementById(1).firstChild.data = 2;
    document.getElementById(2).firstChild.data = 2;
    document.getElementById(3).firstChild.data = 4;
    comienza = true;
    //window.alert(comienza);
}

function reiniciar() {
    var p = new Array(15);
    var i = 0;
    while (i <= 15) {

        document.getElementById(i).firstChild.data = ' ';



        i = i + 1;
    }

}
function aleatorio(A) {
    var B = Math.round(Math.random() * 15);
    if (A === B) {
        B = aleatorio(B);

    } else {
        //window.alert(B);
    }
    return B;
}
function nuevo(){
    var A=Math.round(Math.random() * 10);
    if(A<8){A=2;}else{A=4;}
   
   
   C=aleatorio(16);
if(document.getElementById(C).firstChild.data!==' '){
    nuevo();
    
}
else{
    document.getElementById(C).firstChild.data = A;
    
}    

    

}
