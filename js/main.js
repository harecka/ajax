"use strict";

$(function(){
   $.ajax({
       url:"http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
       dataType: "json",
       success: function(resultJson) {
           console.log(resultJson);
           
           var pUserId = document.createElement("p");
           var pUserName = document.createElement("p");
           var pUserUrl = document.createElement("p");
           
           pUserId.innerHTML= "User ID:" + resultJson.userId;
           pUserName.innerHTML= "User Name:" + resultJson.userName;
           pUserUrl.innerHTML= "User url: http://" + resultJson.userURL;
           
           document.body.appendChild(pUserId);
           document.body.appendChild(pUserName);
           document.body.appendChild(pUserUrl);
           
        },
       onerror: function (msg) {
           
       }
   }); 
       
      $("#button").click.(function(){
           pUserId.innerHTML= "User ID:" + resultJson.userId;
           pUserName.innerHTML= "User Name:" + resultJson.userName;
           pUserUrl.innerHTML= "User url: http://" + resultJson.userURL;
           
           document.body.appendChild(pUserId);
           document.body.appendChild(pUserName);
           document.body.appendChild(pUserUrl);
       
   });
    
//    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data){
//        console.log(data);
//    });  
});