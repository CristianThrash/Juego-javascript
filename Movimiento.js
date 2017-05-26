function moverlo(w,x,y,z) {
    
   
    var A3;
    var A2;
    var A1;
    var A0;
        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);

        //A0=parseInt(A0); 

        //  if((A3==0)&& (A2==0) && (A1==0) && (A0==0)){}//todos son vacios

       // window.alert("iniciando con -" + A3 + "-" + A2 + "-" + A1 + "-" + A0);
       
 if ((A3 !== 0) && (A2 === 0) && (A1 === 0) && (A0 === 0)) {
            document.getElementById(w).firstChild.data = obtenerEsp(z);
            document.getElementById(z).firstChild.data = ' ';
            // uno libre 
            A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);

        }
        // A3=parseInt(obtenerESP(3));
        //window.alert(A3+A2+A1+A0);
        if ((A3 === 0) && (A2 !== 0) && (A1 === 0) && (A0 === 0)) {

            document.getElementById(w).firstChild.data = obtenerEsp(y);
            document.getElementById(y).firstChild.data = ' ';// uno libre 
            A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
        }
        if ((A3 === 0) && (A2 === 0) && (A1 !== 0) && (A0 === 0)) {
            document.getElementById(w).firstChild.data = obtenerEsp(x);
            document.getElementById(x).firstChild.data = ' ';// uno libre
            A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
        }
        if ((A3 === 0) && (A2 === 0) && (A1 === 0) && (A0 !== 0)) {
            document.getElementById(w).firstChild.data = obtenerEsp(w);
            //document.getElementById(0).firstChild.data = ' ';// uno libre 
            A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
        }
    if ((A1 === A0) && (A1 !== 0)) {

            document.getElementById(w).firstChild.data = (parseInt(A1) + parseInt(A0));
            document.getElementById(x).firstChild.data = ' ';
            //window.alert("conclucion en A1===A0--" + A3 + "-" + A2 + "-" + A1 + "-" + A0);
            // document.getElementById(0).firstChild.data=' ';  
            A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
        }
        //window.alert("-"+A3+ "-"+ A2 +"-"+ A1+"-" + A0);
        if ((A1 === A2) && (A1 !== 0)) {
            //window.alert("entro a ca lok :/");
            if (A0 === 0) {
                document.getElementById(w).firstChild.data = (parseInt(A1) + parseInt(A2));
                document.getElementById(x).firstChild.data = ' ';
                document.getElementById(y).firstChild.data = ' ';
                A3 = moverA3(z);
                A2 = moverA2(y);
                A1 = moverA1(x);
                A0 = moverA0(w);
            } else {
                document.getElementById(x).firstChild.data = (parseInt(A1) + parseInt(A2));
                document.getElementById(y).firstChild.data = ' ';
                A3 = moverA3(z);
                A2 = moverA2(y);
                A1 = moverA1(x);
                A0 = moverA0(w);
            }
        }
        if ((A2 === A3) && (A2 !== 0)) {
            //window.alert("corrrecto");
            if ((A0 === 0) && (A1 === 0)) {
               // window.alert("fallo 01");
                document.getElementById(w).firstChild.data = (parseInt(A2) + parseInt(A3));
                document.getElementById(y).firstChild.data = ' ';
                document.getElementById(z).firstChild.data = ' ';
                A3 = moverA3(z);
                A2 = moverA2(y);
                A1 = moverA1(x);
                A0 = moverA0(w);
            }

            if ((A0 !== 0) && (A1 === 0) && (A2 !== 0)) {
                //window.alert("fallo 02");
                document.getElementById(x).firstChild.data = (parseInt(A2) + parseInt(A3));
                document.getElementById(y).firstChild.data = ' ';
                document.getElementById(z).firstChild.data = ' ';
                A3 = moverA3(z);
                A2 = moverA2(y);
                A1 = moverA1(x);
                A0 = moverA0(w);
            }
            if ((A0 !== 0) && (A1 !== 0)&&(A2!==0)) {
                //window.alert("corrrecto");
                document.getElementById(y).firstChild.data = (parseInt(A2) + parseInt(A3));
                document.getElementById(z).firstChild.data = ' ';
                A3 = moverA3(z);
                A2 = moverA2(y);
                A1 = moverA1(x);
                A0 = moverA0(w);
            }
        }
        //
  if ((A0 === A3)&& (A1===0)&&(A2===0)&&(A0 !== 0)) {
//window.alert("!!"+A0+"!!"+A3);
            document.getElementById(w).firstChild.data = (parseInt(A0) + parseInt(A3));
            document.getElementById(z).firstChild.data = ' ';
            //window.alert("conclucion en A1===A0--" + A3 + "-" + A2 + "-" + A1 + "-" + A0);
            // document.getElementById(0).firstChild.data=' ';  
            A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
        }
  if ((A0 === A2)&& (A1===0)&&(A0 !== 0)) {
//window.alert("!!"+A0+"!!"+A2);
            document.getElementById(w).firstChild.data = (parseInt(A0) + parseInt(A2));
            document.getElementById(y).firstChild.data = ' ';
            //window.alert("conclucion en A1===A0--" + A3 + "-" + A2 + "-" + A1 + "-" + A0);
            // document.getElementById(0).firstChild.data=' ';  
            A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
        }
        
        if((A1===A3)&&(A1!==0)){
           // window.alert("!!"+A1+"!!"+A3);

        if(A0=i==0){
            document.getElementById(w).firstChild.data = (parseInt(A1) + parseInt(A3));
            document.getElementById(x).firstChild.data = ' ';
            document.getElementById(z).firstChild.data = ' ';
            A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
            
        }
        else{
            document.getElementById(x).firstChild.data = (parseInt(A1) + parseInt(A3));
           // document.getElementById(x).firstChild.data = ' ';
            document.getElementById(z).firstChild.data = ' ';
            A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
            
        }
        }
        //parches
       
        if((A1===0)&&(A0!==0)){
            if((A3!==0)&&(A2===0)){
                //window.alert('!');
                //document.getElementById(w).firstChild.data = A1;
                document.getElementById(x).firstChild.data = A3;
                //document.getElementById(y).firstChild.data = ' ';
                document.getElementById(z).firstChild.data = ' ';
                A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
            }
            if((A3!==0)&&(A2!==0)&&(A2!==A3)){
                //window.alert('!°°°');
                //document.getElementById(w).firstChild.data = A1;
                document.getElementById(x).firstChild.data = A2;
                document.getElementById(y).firstChild.data = A3;
                document.getElementById(z).firstChild.data = ' ';
                A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
            }
           
            
            
            
        }
         if((A0===0)){
            if((A1!==A2)&&(A2!==A3)(A2!==0)){
               // window.alert('!');
                document.getElementById(w).firstChild.data = A1;
                document.getElementById(x).firstChild.data = A2;
                document.getElementById(y).firstChild.data = A3;
                document.getElementById(z).firstChild.data = ' ';
                A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
            }
            if((A3!==A2)&&(A1===0)&&(A3!==0)&&(A3!==0)&&(A2!==0)){
              //window.alert('!');
                document.getElementById(w).firstChild.data = A2;
                document.getElementById(x).firstChild.data = A3;
                document.getElementById(y).firstChild.data = ' ';
                document.getElementById(z).firstChild.data = ' ';
                A3 = moverA3(z);
            A2 = moverA2(y);
            A1 = moverA1(x);
            A0 = moverA0(w);
            }
            
            
            
        }
        
//    unicos
//    
//    //
        
    }
function moverA3(A) {
    return  obtenerEsp(A);
}
function moverA2(A) {
    return  obtenerEsp(A);
}
function moverA1(A) {
    return  obtenerEsp(A);
}
function moverA0(A) {
    return  obtenerEsp(A);
}


//window.alert(obtenerEsp(15));











