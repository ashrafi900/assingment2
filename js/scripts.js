// This function is to show hello world


/*\
 1, dfdff
 3 dfd
4. multiline comments

*/
//dfdfd
// var firstname ="sanjana ";
// var lastname ="priya";
// var fullname = firstname +" " + lastname;
// console.log( fullname);



// var num1 =60;
// var num2 =80;
// var num3 =100;
// var sum = num1 + num2 + num3;
// var average =(num1 + num2 +num3) /3;


// var firstnumber = "40.5";
// var countndnumber = "20";
//  var sum =(parseFlot ( countnumber) + parseInt (countnumber));
//   console . log( sum)


// function minus_Number( ){
//     var firstnumber =1024 ;
//     var secoundnumber =128;
   
//    var result=firstnumber/secoundnumber;
//    console.log(result);
//    return(result);
   
//    }
//    var minus_Number=minus_Number(1024,128);
  
  

//   alert ( minus_Number,minus_Number);

// function divisionnumber() {
//     var result =(9*c /5) +32
//     return result;
// }


// var divisionnumber = divisionnumber(38)
//  console.log( divisionnumber);


 


var divisionresult= divisionnumbers (38);
console.log(divisionresult);
document.getElementById('fahr_1').innerHTML=divisionresult;

   function divisionnumbers (c){
    var result =(9* c /5) +32
    return result;
    
   }
   var divisionresult= divisionnumbers (24);
console.log(divisionresult);
document.getElementById('fahr_2').innerHTML=divisionresult;

   function divisionnumbers (c){
    var result =(9* c /5) +32
    return result;
    
   }
   var divisionresult= divisionnumbers (-1);
console.log(divisionresult);
document.getElementById('fahr_3').innerHTML=divisionresult;

   function divisionnumbers (c){
    var result =(9* c /5) +32
    return result;
    
   }
   var classification = [" jhon hill" ,"mary jane "  ,"gary vee","paricia mill","helen hali","paul green"]
   classification.shift();
   console.log(classification);

   var classification = ["mary jane "  ,"gary vee","paricia mill","helen hali","paul green"]
   classification.shift();
   console.log(classification);

 var classification = ["gary vee","paricia mill","helen hali","paul green"]
   classification.shift();
   console.log(classification);
   document.getElementById("best_students").innerHTML=classification


   var course ={
      'title':"learn to code in paython 3",
      'catagories':['programing','technolgy','python'],
      '5_stars_reviews': 420,
        '4_stars_reviews': 80,
        '3_stars_reviews': 33,
        '2_stars_reviews': 20,
        '1_stars_reviews': 4
   }
console.log(course.title);
document.getElementById("course_title").innerHTML=course.title

console.log(course['catagories'][0]);
document.getElementById("main_category").innerText=course['catagories'][0]
var shoppingList = ['Milk',"Butter","Bread","Beer","rice","potatos", "chocolate"];
shoppingList.pop();
shoppingList.shift();
shoppingList.unshift("chocolate");
console.log( shoppingList);



var shopingList = ['Milk',"Butter","Bread","Beer","rice","potatos", "chocolate"];
shoppingList.push("Chesse");
shoppingList.push("Egg");

console.log(shoppingList);

function sum_args(num1,num2,num3,num4,num5){
   var sum = num1 + num2 + num3 + num4 + num5;
   console.log(sum);
}
sum_args(420,80,33,20,4);
var average =(420/557)*100;
console.log(average);
var roundNumber = Math.round ( 75.40394973070018);
console.log(roundNumber);
var name ="75";
name += "%"
console.log(name);
document.getElementById("reviews_5_stars").innerHTML=name;
document.getElementById("click-me").oneclick = function(){
   alert('are u human');
};
document.getElementById("hover-me").oneclick = function(){
   alert('take your cap');
};
document.getElementById("leave-me").oneclick = function(){
   alert('you move too much');
};
document.getElementById("see-me").oneclick = function(){
   alert('do not go there');
};
var button = document.getElementById("colour_button"); 
button.onclick = function () {
   document.getElementById("button_one") .style .display ="block";
}
document.getElementById("color_button").onclick = function(){
   this.style['background-color'] ="orange"
}


//   document.getElementById("color_button").onclick = function() {
    
//   document.getElementById("color_button2").style.background = "purple";
//    document.getElementById("color_button").style.transform = "translateX(100px)";
//    document.getElementById("backButton").style.background= "blue";
//   document.getElementById("color_button2").style.display = "inline";
//   document.getElementById("backButton").style.display = "inline";
//   document.getElementById("color_button2").style.transform = "translateX(100px)";
//   document.getElementById("backButton").style.transform = "translateX(100px)";
 

 
//  }
 

// document.getElementById("backButton").onclick = function () {
//     document.getElementById("color_button2").style.display = "none";
//    document.getElementById("backButton").style.display = "none";
//  }

// document.getElementById("color_button").onclick = function() {
//     document.getElementById("color_button").style['background-color'] = "red";
//     document.getElementById("color_button2").style['background-color'] = "orange";
//     document.getElementById("backButton").style.display = "inline";
//     document.getElementById("color_button2").style.display = "inline";
// };

// document.getElementById("backButton").onclick = function () {
//         document.getElementById("color_button2").style.display = "none";
//        document.getElementById("backButton").style.display = "none";
//     }


                   
// var dateObj = new Date();

// console.log(dateObj.getTime());


// var clicButton = document.getElementById("color_button");
// var showButton = document.getElementById("hide");
// var clicButtonButton = document.getElementById("hide");

// clicButton .onclick = function () {
//     document. getElementById('box2').classList.add("show")
  
   


// }
// showButton .onclick = function () {
// document. getElementById("box2").classList.remove("show")

// document. getElementById("color_button").style.display ="none"

// }

// var submitButton = document.getElementById ("submit")
// var submitButton = document.getElementById ("name")
// submitButton .onclick =function (e) {
//     e.preventdefult();
//     console.log( namevalue.value)
  
//    document.getElementById('submit').innertext=namevaluet;

// }
