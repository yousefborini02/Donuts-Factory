// Task 1 

// let name = prompt("Enter your name :");
// let gender = prompt("Your gender : ").toLowerCase();
// if (gender==="male")
//     {
//         alert("Welcome Mr "+ name);
//     }
// else if (gender==="female")
//     {
//         alert("Welcome Ms "+ name);
//     }
//     else
//     { 
//         alert("Welcome");
//     }


//     let confirming = confirm("do you want coffee or donuts or ice cream or bakery ?")
//     if (confirming===true)
//         {
//            let order = prompt("Enter your order : (coffee , donuts , ice cream , bakery) ");
//            alert("your order is getting prepared");
//         }

//     console.log("user name : "+ name + "user order : " + order);




//Task 2

// let name = prompt("Enter your name :");
// let gender = prompt("Your gender : ").toLowerCase();

// if (gender==="male")
//         {
//             alert("Welcome Mr "+ name);
//         }
//     else if (gender==="female")
//         {
//             alert("Welcome Ms "+ name);
//         }
//         else
//         { 
//             while ((gender!== "male") && (gender!== "female")){
//                 gender= prompt("Your gender : (male,female) ").toLowerCase();
//             }   
//         }

//     let confirming = confirm("do you want coffee or donuts or ice cream or bakery ?")
//     if (confirming===true)
//         {
//            let order = prompt("Enter your order : (coffee , donuts , ice cream , bakery) ");
//            alert("your order is getting prepared");
//         }
//         console.log("user name : "+ name + "user order : " + order);


//         let type = typeof(order);
//         let arr = [name , gender , type , order];

//         for(let i=0;i<arr.length;i++)
//             {
//                 console.log(arr[i]);
//             }











//Task 3

// let name = prompt("Enter your name :");

// function callGender(){
//    let gender = prompt("Your gender : ").toLowerCase();

//    if (gender==="male")
//         {
//             alert("Welcome Mr "+ name);
//         }
//     else if (gender==="female")
//         {
//             alert("Welcome Ms "+ name);
//         }
//         else
//         { 
//             while ((gender!== "male") && (gender!== "female")){
//                 gender= prompt("Your gender : (male,female) ").toLowerCase();
//             }   
//         }

//     let confirming = confirm("do you want coffee or donuts or ice cream or bakery ?")
//     if (confirming===true)
//         {
//            let order = prompt("Enter your order : (coffee , donuts , ice cream , bakery) ");
//            alert("your order is getting prepared");
//         }
// }

//         callGender();

//         console.log("user name : "+ name + "user order : " + order);


//         let type = typeof(order);
//         let arr = [name , gender , type , order];

//         for(let i=0;i<arr.length;i++)
//             {
//                 console.log(arr[i]);
//             }









//task4 

// let name = prompt("Enter your name :");

// let information=document.getElementsByClassName("information")[0];
// let parName=document.createElement("p");
// parName.innerHTML=name;
// information.appendChild(parName);

// let ord=document.createElement("ol");
// information.appendChild(ord);

// function callGender(){
//    let gender = prompt("Your gender : ").toLowerCase();
//    if (gender==="male")
//         {
//             alert("Welcome Mr "+ name);
//         }
//     else if (gender==="female")
//         {
//             alert("Welcome Ms "+ name);
//         }
//         else
//         { 
//             while ((gender!== "male") && (gender!== "female")){
//                 gender= prompt("Your gender : (male,female) ").toLowerCase();
//             }   
//         }
//         let genderHtml=document.createElement("li");
//         genderHtml.innerHTML=gender;
//         ord.appendChild(genderHtml);
// }

//         callGender();

//         let age=prompt("Enter your age");
//         let ageHtml=document.createElement("li");
//         ageHtml.innerHTML=age;
//         ord.appendChild(ageHtml);

//         let confirming = confirm("do you want coffee or donuts or ice cream or bakery ?")
//         if (confirming===true)
//           {
//            let order = prompt("Enter your order : (coffee , donuts , ice cream , bakery) ");
//            alert("your order is getting prepared");
//            let orderHtml=document.createElement("li");
//            orderHtml.innerHTML=order;
//            ord.appendChild(orderHtml);
//           }

//         console.log("user name : "+ name + "user order : " + order);

//         let type = typeof(order);
//         let arr = [name , gender , type , order];

//         for(let i=0;i<arr.length;i++)
//             {
//                 console.log(arr[i]);
//             }






//task5 

           
document.getElementById("btnId").addEventListener("click",function (e){
    
    e.preventDefault();
    let parent = document.getElementById("parent");
    
    let userName = document.getElementById("userNameId");
    let userNameVal= userName.value;
    let userNameText=document.createElement("p");
    userNameText.innerHTML="Name : "+userNameVal;
    parent.appendChild(userNameText);

    let age = document.getElementById("ageId");
    let ageVal= age.value;
    let ageText=document.createElement("p");
    ageText.innerHTML="Age : "+ageVal;
    parent.appendChild(ageText);

    let gender = document.getElementById("genderId");
    let genderVal= gender.value;
    let genderText=document.createElement("p");
    genderText.innerHTML="Gender : "+genderVal;
    parent.appendChild(genderText);

    let order = document.getElementById("orderId");
    let orderVal= order.value;
    let orderText=document.createElement("p");
    orderText.innerHTML="Order : "+ orderVal;
    parent.appendChild(orderText);

    let drinkHot = document.getElementById("hot");
    if(drinkHot.checked==true)
        {
            let drinkHotText=document.createElement("p");
            drinkHotText.innerHTML="Drink : Hot";
            parent.appendChild(drinkHotText);
        }

    let drinkCold = document.getElementById("cold");
    if(drinkCold.checked==true)
        {
            let drinkColdText=document.createElement("p");
            drinkColdText.innerHTML="Drink : Cold";
            parent.appendChild(drinkColdText);
        }    

});


           





