function calc(){
    a= Math.random();
    per=Math.round(a*100);
    myname= document.getElementById("myname").value;
    othername= document.getElementById("othername").value;
    if(myname=="" || othername==""){
        document.getElementById("percentage").innerHTML="Please enter both the names";
    }
    else{
    document.getElementById("msg").innerHTML="The chance of "+myname+" having succesful relation with "+othername+" is";
    document.getElementById("percentage").innerHTML=per + "%";
    if(per<=40){
        document.getElementById("result").innerHTML="dusri wli khoj yha chance kam ha";

    }
    else if(per>40 && per<=60){
        document.getElementById("result").innerHTML="Thora chance ha but kat skta ha";

    }
    else if(per>60 && per<=80){
        document.getElementById("result").innerHTML="Ekdam jhengiyal couple but tikega"
    }
   
    else{
        document.getElementById("result").innerHTML="Ekdam rab ne bna di jodi"
    }
   }
    
}