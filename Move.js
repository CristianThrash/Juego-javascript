function mover(w, x, y, z) {

    var A3;
    var A2;
    var A1;
    var A0;
    A3 = moverA3(z);
    A2 = moverA2(y);
    A1 = moverA1(x);
    A0 = moverA0(w);
    if (A1 !== 0) {
        if (A0 === 0) {
            document.getElementById(w).firstChild.data = A1;
            document.getElementById(x).firstChild.data = ' ';
            M = true;


        }
        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);

    }
    if (A2 !== 0) {
        if ((A0 === 0) && (A1 === 0)) {
            document.getElementById(w).firstChild.data = A2;
            document.getElementById(y).firstChild.data = ' ';
            M = true;

        }
        if ((A1 === 0) && (A0 !== 0)) {
            document.getElementById(x).firstChild.data = A2;
            document.getElementById(y).firstChild.data = ' ';
            M = true;


        }
        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);
        //M = true;
    }
    if (A3 !== 0) {
        if ((A2 === 0) && (A1 === 0) && (A0 === 0)) {
            document.getElementById(w).firstChild.data = A3;
            document.getElementById(z).firstChild.data = ' ';
            M = true;

        }
        if ((A2 === 0) && (A1 === 0) && (A0 !== 0)) {
            document.getElementById(x).firstChild.data = A3;
            document.getElementById(z).firstChild.data = ' ';
            M = true;

        }
        if ((A2 === 0) && (A1 !== 0) && (A0 !== 0)) {
            document.getElementById(y).firstChild.data = A3;
            document.getElementById(z).firstChild.data = ' ';
            M = true;

        }



        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);

    }
    A3 = moverA3(z);
    A2 = moverA2(y);
    A1 = moverA1(x);
    A0 = moverA0(w);

//igualdades//   
    if ((A3 === A2) && (A2 !== 0)) {
        //window.alert("!");
        document.getElementById(y).firstChild.data = (parseInt(A2) + parseInt(A3));
        document.getElementById(z).firstChild.data = ' ';

        M = true;
        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);

        puntaje = puntaje + parseInt(A2);
        document.getElementById(999).firstChild.data = puntaje;
    }
    if ((A0 === A1) && (A0 !== 0)) {
        // window.alert("0 y 1 iguales"+A0+"+"+A1);
        document.getElementById(w).firstChild.data = (parseInt(A1) + parseInt(A0));
        document.getElementById(x).firstChild.data = ' ';
        M = true;
        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);

        puntaje = puntaje + parseInt(A0);
        document.getElementById(999).firstChild.data = puntaje;
    }
    if ((A2 === A1) && (A2 !== 0)) {
        //window.alert("!");
        document.getElementById(x).firstChild.data = (parseInt(A1) + parseInt(A2));
        document.getElementById(y).firstChild.data = ' ';
        M = true;
        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);
        //M = true;
        puntaje = puntaje + parseInt(A1);
        document.getElementById(999).firstChild.data = puntaje;
    }
//reordenar
    if (A1 !== 0) {
        if (A0 === 0) {
            document.getElementById(w).firstChild.data = A1;
            document.getElementById(x).firstChild.data = ' ';
            M = true;

        }
        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);

    }
    if (A2 !== 0) {
        if ((A0 === 0) && (A1 === 0)) {
            document.getElementById(w).firstChild.data = A2;
            document.getElementById(y).firstChild.data = ' ';
            M = true;
        }
        if ((A1 === 0) && (A0 !== 0)) {
            document.getElementById(x).firstChild.data = A2;
            document.getElementById(y).firstChild.data = ' ';
            M = true;

        }
        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);

    }
    if (A3 !== 0) {
        if ((A2 === 0) && (A1 === 0) && (A0 === 0)) {
            document.getElementById(w).firstChild.data = A3;
            document.getElementById(z).firstChild.data = ' ';
            M = true;
        }
        if ((A2 === 0) && (A1 === 0) && (A0 !== 0)) {
            document.getElementById(x).firstChild.data = A3;
            document.getElementById(z).firstChild.data = ' ';
            M = true;
        }
        if ((A2 === 0) && (A1 !== 0) && (A0 !== 0)) {
            document.getElementById(y).firstChild.data = A3;
            document.getElementById(z).firstChild.data = ' ';
            M = true;
        }



        A3 = moverA3(z);
        A2 = moverA2(y);
        A1 = moverA1(x);
        A0 = moverA0(w);

    }
    A3 = moverA3(z);
    A2 = moverA2(y);
    A1 = moverA1(x);
    A0 = moverA0(w);


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