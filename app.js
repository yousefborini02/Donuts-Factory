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

let name = prompt("Enter your name :");
let gender = prompt("Your gender : ").toLowerCase();

if (gender==="male")
        {
            alert("Welcome Mr "+ name);
        }
    else if (gender==="female")
        {
            alert("Welcome Ms "+ name);
        }
        else
        { 
            while ((gender!== "male") && (gender!== "female")){
                gender= prompt("Your gender : (male,female) ").toLowerCase();
            }   
        }

    let confirming = confirm("do you want coffee or donuts or ice cream or bakery ?")
    if (confirming===true)
        {
           let order = prompt("Enter your order : (coffee , donuts , ice cream , bakery) ");
           alert("your order is getting prepared");
        }
        console.log("user name : "+ name + "user order : " + order);


        let type = typeof(order);
        let arr = [name , gender , type , order];

        for(let i=0;i<arr.length;i++)
            {
                console.log(arr[i]);
            }





