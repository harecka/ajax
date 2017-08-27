"use strict";

//skrypt uruchomi się po załadowaniu strony
$(function(){
    function pobierzDane(){
       $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",function(plikJson){
           
//           tworzenie znacznika p
           var jUserId=document.createElement("p");
           var jUserName=document.createElement("p");
           var jUserUrl=document.createElement("p");
           
//           umiejscowienie znacznika p
           document.body.appendChild(jUserId);
           document.body.appendChild(jUserName);
           document.body.appendChild(jUserUrl);
           
//           wypełnienie znaczników p
           jUserId.innerHTML = "tutaj zostanie wyswietlone id:" + plikJson.userId;
           jUserName.innerHTML = "tutaj zostanie wyswietlone userName:" + plikJson.userName;
           jUserUrl.innerHTML = "tutaj zostanie wyswietlone UserUrl:" + plikJson.userURL;
       })
    }
        
//    przypięcie funkcji do przycisku
    $("#button").click(function(){
        pobierzDane();
    });
});