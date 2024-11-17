// console.log( "this is ex1.js")
// var myname="ashrafi";
// var age="19";






// var firstname="hi my name is";
// var secoundname="i am";
// var thirdname="this is me ashrafi and i learning js"
// document.getElementById('student-massage').innerHTML=firstname +" "+ myname+" "+secoundname+" "+ age +" "+ thirdname;


// var phone1 = "988866552";
// var phone2 = "99087612366";
// var phone3 = 876543123;


//  if(phone1.length <= 9){
//  console.log(phone1 + "is valid")
//  }
//  else (phone1. length <= 9)
//  {
    
//     console.log(" is not valid");
    
//  }

//  if (phone2.length <= 9){
//     console.log(phone2 + "is valid")
// }
// else { 
//      console.log(phone2 + "is  not valid")
//     }
//      if (phone3. length <= 9){
//         console .log(phone3 + "is valid")
//     }
    
    
//     else
//     {
//        console.log(" is not valid")
//     }
     
    
document.getElementById("student_message").innerHTML="hi,this is me ashrafi,i am 19 ,I am learning javascript";


var num_1=101;
var num_2=7;
var division =num_1/num_2
console.log( division.toFixed(2));

document.getElementById("result").innerHTML=division.toFixed(2);
var phone1 ="988866552";
if ( phone1.length == 9 ) {
    console.log(phone1 +"valid");
} else{
    console.log(phone1+"invalid");
}

var phone2 ="99087612366";
if ( phone2.length == 9 ) {
    console.log(phone2 +"valid");
} else{
    console.log(phone2+"invalid");
}
var phone3 ="876543123";
if ( phone3.length == 9 ) {
    console.log(phone3 +"valid");
} else{
    console.log(phone3+"invalid");
}
var power =Math.pow(32,6);
console.log(power);

var getAddress = document.getElementById("url_1").innerText;
var modifiedAdress = "https://"+getAddress;

document.getElementById("url_2").innerText = modifiedAdress;


var replaceWith= document.getElementById("url_3").replaceWith;

var replace = "https://"-replace;
document.getElementById("url_4").innerText = replace;




