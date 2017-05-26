/* global comienza */

function info (elEvento) {
        if(comienza){
         evento = elEvento || window.event;
         k=evento.keyCode; //número de código de la tecla.
        // var x = document.getElementById("one");  
        
        //alert(k);
        if(k=='37'){
       // x.style.color = "blue";
       //obtener();
       // iniciar();
           // alert("oprimio izquierda");
            mover(0,1,2,3);
            mover(4,5,6,7);
            mover(8,9,10,11);
            mover(12,13,14,15);
           // window.alert(M);
            if(M){
            nuevo();}
        M=false;
            color();
       }
        if(k=='38'){
       // x.style.color = "blue";
        //iniciar(16);
        //alert("oprimio arriba");
        mover(0,4,8,12);
        mover(1,5,9,13);
        mover(2,6,10,14);
        mover(3,7,11,15);
        //window.alert(M);
        if(M){
            nuevo();}
        M=false;
        color();
       }
        if(k=='39'){
       // x.style.color = "blue";
        //reiniciar();
       // alert("oprimio derecha");
        mover(3,2,1,0);
        mover(7,6,5,4);
        mover(11,10,9,8);
        mover(15,14,13,12);
        //window.alert(M);
        if(M){
            nuevo();}
        M=false;color();
        
       }
        if(k=='40'){
       // x.style.color = "blue";
    
       // alert("oprimio abajo");
        mover(12,8,4,0);
        mover(13,9,5,1);
        mover(14,10,6,2);
        mover(15,11,7,3);
        //window.alert(M);
        if(M){
            nuevo();}
        M=false;color();
       }
        }}
window.onload = function() {
document.onkeydown = info;
}
    
//}