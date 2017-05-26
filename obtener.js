 function obtener () {
     
     var p = new Array(15);
     var i=0;
    while(i<=15){
   if(document.getElementById(i).firstChild.data==' '){
       p[i]='vacio';
       document.getElementById(i).firstChild.data='999';
   }
       else{
    
    p[i]=document.getElementById(i).firstChild.data;
    p[i]=parseInt(p[i]);
     
     
       }
    // window.alert(p[i]);
    
     i=i+1;
     }
     //window.alert(p[14]);
 }
  function obtenerEsp (E) {
     if(document.getElementById(E).firstChild.data==' '){
       P=0;
       
   }
       else{
    
    P=document.getElementById(E).firstChild.data;
    //P=parseInt(p[i]);
     
     
       }
      return P;
  }
  function color () {
     var i=0;
     var x=0;
      
     
      while(i<=15){
          
         x= obtenerEsp(i);
         //window.alert(x);
         x=parseInt(x);
         
                // .style.color = "blue";
          if(x===0){}
          if(x===2){document.getElementById(i).style.color = "black";document.getElementById("tabla").style.color="black";}
          if(x===4){document.getElementById(i).style.color = "#0B615E";document.getElementById("tabla").style.color="#0B615E";}
          if(x===8){document.getElementById(i).style.color = "green";document.getElementById("tabla").style.color="green";}
          if(x===16){document.getElementById(i).style.color = "#B45F04";document.getElementById("tabla").style.color="#B45F04";}
          if(x===32){document.getElementById(i).style.color = "red";document.getElementById("tabla").style.color="red";}
          if(x===64){document.getElementById(i).style.color = "#0A2A1B";document.getElementById("tabla").style.color="#0A2A1B";}
          if(x===128){document.getElementById(i).style.color = "#0101DF";document.getElementById("tabla").style.color="#0101DF";}
          if(x===256){document.getElementById(i).style.color = "#8000FF";document.getElementById("tabla").style.color="#8000FF";}
          if(x===512){document.getElementById(i).style.color = "#29220A";document.getElementById("tabla").style.color="#29220A";}
          if(x===1024){document.getElementById(i).style.color = "#3B0B24";document.getElementById("tabla").style.color="#3B0B24";}
          if(x===2048){document.getElementById(i).style.color = "#886A08";document.getElementById("tabla").style.color="#886A08";
          
          }
          
          
          i=i+1;
      }
     
     
     
  }
    
     
//<style>
//
//            input[type=button],input[type="text"]{
//                width: 100%;
//                height: 100%;
//                font-size: 30px;
//            }
//
//            table,form{
//                width: 500px;
//                height: 400px;
//                margin: 0 auto;
//            }
//
//            footer{
//                text-align: center;
//                font-size: 16px;
//            }
//
//        </style>
 