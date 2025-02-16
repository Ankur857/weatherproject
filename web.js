// // // // // // // // // // console.log("hello");
// // // // // // // // // // console.log("i like pizza");
// // // // // // // // // // window.alert("this is an alert");
// // // // // // // // // // window.alert("i like pizza");
// // // // // // // // // // document.getElementById("myh1").textContent="Hello";
// // // // // // // // // // document.getElementById("myp").textContent="I like pizza";

// // // // // // // // // let age=123;
// // // // // // // // // let fir="bro";
// // // // // // // // // console.log(typeof fir);
// // // // // // // // // console.log(typeof age);
// // // // // // // // // console.log(`you are ${age} year`);

// // // // // // // // let br=true;
// // // // // // // // console.log(`bro is ${br} `);


// // // // // // // let a=20;
// // // // // // // a=a+2;
// // // // // // // a=a-2;
// // // // // // // a=a*2;
// // // // // // // a=a/2;
// // // // // // // a=a**2;  //power function
// // // // // // // a=a%2;
// // // // // // // console.log(a);


// // // // // // //window prompt
// // // // // // let username;
// // // // // // username=window.prompt("name please");
// // // // // // console.log(username);

// // // // // //html textbox
// // // // // // let usr;
// // // // // // document.getElementById("mysub").onclick=function(){
// // // // // //     usr=document.getElementById("mytext").value;
// // // // // //     document.getElementById("myh1").textContent=`hello  ${usr}`;
// // // // // //     console.log(usr);
// // // // // //    }


// // // // // //type conversion
// // // // // let age=window.prompt("yours age is::");
// // // // // //12age=Number(age);
// // // // // console.log(age,typeof age);


// // // // let x="first";
// // // // let y="second";
// // // // let z="third";

// // // // x=Number(x);
// // // // y=String(y);
// // // // z=Boolean(z);

// // // // console.log(x,typeof x);
// // // // console.log(y,typeof y);
// // // // console.log(z,typeof z);

// // // const xy=3.14159;
// // // let num;
// // // let cir;
// // // document.getElementById("mysub").onclick=function(){
// // //     num=document.getElementById("mytext").value;
// // //     num=Number(num);
// // //     cir=2*xy*num;
// // //     document.getElementById("pr").textContent=cir;
// // // }

// // const decrb=document.getElementById("decb");
// // const incrb=document.getElementById("incb");
// // const tes=document.getElementById("res");
// // const labe=document.getElementById("lab");

// // let c=0;
// // decb.onclick=function(){
// //     c--;
// //     labe.textContent=c;
// // }
// // incb.onclick=function(){
// //     c++;
// //     labe.textContent=c;
// // }
// // res.onclick=function(){
// //     c=0;
// //     labe.textContent=c;
// // }

// const mybub=document.getElementById("mybub");
// const mylab=document.getElementById("mylab");
// const min=1;
// const max=6;
// let rand;
// mybub.onclick=function(){
//     rand=Math.floor(Math.random()*max)+min;
//     mylab.textContent=rand;
// }

// let rn="123-456-7890";
// rn=rn.padStart(15,"0");
// console.log(rn);

//method chaining
// let username=window.prompt("Enter uswrname");
// username=username.trim().charAt(0).toUpperCase();
// console.log(username);

// function hbd(usr,age){
//     console.log("hbd");
//     console.log(`hbd ${usr}`);
//     console.log(`your age ${age}`);
// }
// hbd("bro",25);

// function fin1(){
//     let x=1;
//     console.log(x);
// }

// function fin2(){
//     let x=5;
//     console.log(x);
// }

// fin1();
// fin2();

// let fruits=["apple","mango"];
// for(let br of fruits){
// console.log(br);
// }

//spread opertor---kuch bhi store ho ye tod deta h
// let st="bro code";
// let s=[...st].join("-");
// console.log(s);

//temperature conversion

// const tb=document.getElementById("tb");
// const tofar=document.getElementById("tofar");
// const tocel=document.getElementById("tocel");
// const res=document.getElementById("res");
// let temp;

// function convert(){

//     if(tofar.checked){
//         temp=Number(tb.value);
//         temp=temp*9/5+32;
//         res.textContent=temp.toFixed(1)+"°F";
//         //res.textContent="Selected to Fahrenheit";
//     }
//     else if(tocel.checked){
//         temp=Number(tb.value);
//         temp=(temp-32)*(5/9);
//         res.textContent=temp.toFixed(1)+"°C";
//        // res.textContent="Selected to Celsius";
//     }
//     else{
//         res.textContent="Select a unit";
//     }
// }

// let fruits=["apple","mango","orange"];
// //fruits.push("banana");
// // fruits.pop();
// // fruits.pop();
// // fruits.pop();

// console.log(fruits);

//index of is used to return index  if not found it will return -1;

// ... = allows array or string to be expanded into separate elements

// function rolldice(){
//     const numofdice=document.getElementById("numofdice").value;
//     const diceres=document.getElementById(" diceres");
//     const dice=docimgument.getElementById(" diceimg");
//     const values=[];
//     const images=[];
//     for(let i=0;i<numofdice;i++){
//         const value=Math.floor(Math.random()*6)+1;
//         values.push(value);
//         images.push('<img src="dice_img/${value}.png">');
//     }
//     diceres.textContent='dice: ${values.join(',')}';
//     diceimg.innerHTML=images.join('');
// }


// function rolldice() {
//     const numofdice = document.getElementById("numofdice").value;
//     const diceres = document.getElementById("diceres");  // Fixed extra space
//     const diceimg = document.getElementById("diceimg");  // Fixed extra space
//     const values = [];
//     const images = [];

//     for (let i = 0; i < numofdice; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="dice_img/${value}.png" alt="Dice ${value}">`); // Corrected template literals
//     }

//     diceres.textContent = `Dice: ${values.join(',')}`;
//     diceimg.innerHTML = images.join('');
// sum(disconsole,1,2);
// function sum(callback,x,y){
//     let res=x+y;
//     callback(res);
// }
// function disconsole(res){
//     console.log(res);
// }


// const person={
//     firstname:"spon",
//     lastname:"sq",
//     age:50,
//     isemp:true,
// }

// const person1={
//     firstname:"spongebood",
//     lastname:"square",
//     age:50,
//     isemp:true,
// }
// console.log(person1.firstname);
// console.log(person1.lastname);
//class Mathut{
//     static PI=3.14159;
//     static getdia(radius){
//         return 2*this.PI*radius
//     }
// }
//     console.log(Mathut.getdia(10));

//destructing
// const arr=[1,2,3,4,5];
// const [first,second,...extr]=arr;
// console.log(first);
// console.log(second);
// console.log(extr);




// const{firstname,lastname,age,job="engr"}=person2;
// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(job);

// function disper({firname,lastname,age,job}){
//     console.log(`name: ${firname} ${lastname}`);
//     console.log(`age: ${age}`);
//     console.log(`job:${job}`);
// }

// const person1={
//     firname:"sponge",
//     lastname:"sqr",
//     age:30,
//     job:"cook",
// }

// const person2={
//     firstname:"patrick",
//     lastname:"star",
//     age:15,
// }
// disper(person1);

//nested objects=objects inside other objects
//allows to represent more complex data structure

//object creation
// const per={
//     fullname:"ankur verma",
//     age:30,
//     hobbies: ["cricket" , "badminton" , "billiards"],
//     address:{
//         street:"bahadurpur",
//         city:"lko",
//         country:"india",
//     }
// }
// console.log(per.fullname);
// console.log(per.age);
// console.log(per.hobbies);
// console.log(per.address);

// for(const property in per.address){
//     console.log(per.address[property]);
// }

//array of objects

// const fruits=[{name:"apple",color:"red",calories:98},
//               {name:"orange",color:"or",calories:56},
//               {name:"grapes",color:"green",calories:43}];

//using for each
// fruits.forEach(fruits=>console.log(fruits.name));

//using map

// const fruitnames=fruits.map(fruit=>fruit.name);
// console.log(fruitnames);

//using filter
// const fruit=fruits.filter(fruit=>fruit.color==="red");
// console.log(fruit);

// const fruit=fruits.filter(fruit=>fruit.calories<=60);
// console.log(fruit);

// function upd(){

//     const now=new Date();
//     const hour=now.getHours();
//     const min=now.getMinutes();
//     const sec=now.getSeconds();
//     const ts=`${hour}:${min}:${sec}`;
//     document.getElementById("clc").textContent=ts;
// }
// upd();
// setInterval(upd,1000);

// const choices=["rock","paper","scissors"];
// const playdis=document.getElementById("playdis");
// const compdis=document.getElementById("compdis");
// const resdis=document.getElementById("resdis");
// function playgame(playchoices){
//     const compchoices=choices[Math.floor(Math.random()*3)];
//    let res="";
//    if(playchoices===compchoices){
//     res="IT'S A TIE";
//    }
//    else{
//     switch(playchoices){
//         case "rock":
//             res=(compchoices==="scissors")?"YOU WIN":"YOU LOSE";
//             break;
//             case "paper":
//                 res=(compchoices==="rock")?"YOU WIN":"YOU LOSE";
//                 break;
//                 case "scissors":
//                     res=(compchoices==="paper")?"YOU WIN":"YOU LOSE";
//                     break;
//     }
//    }
//    playdis.textContent=`PLAYER: ${playchoices}`;
//    compdis.textContent=`COMPUTER: ${compchoices}`;
//    resdis.textContent=res;
// }

// fetchData();
// async function fetchData(){
//     try{
//         const pokemonname=document.getElementById("pokemonname").value.toLowerCase();

//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
         
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         const data=await response.json();
//        const pokemonsprite=data.sprites.front_default;
//        const imgElement=document.getElementById("pokemonsprite");
//        imgElement.src=pokemonsprite;
//        imgElement.style.display="block";
//     }
//     catch(error){
//         console.error(error);
//     }
// }

const weatherForm=document.querySelector(".weatherForm");
const cityin=document.querySelector(".city");
const card=document.querySelector(".card");
const apiKey="0a9436422c35b9737431b8ffcccf9712";
weatherForm.addEventListener("submit",async event =>{
event.preventDefault();
const city=cityin.value;
if(city){
   try{
    const wedata=await getWeatherData(city);
    displayWeatherInfo(wedata);
   }  
   catch(error){
    console.error(error);
    dispererr(error);
   } 
}
else{
    dispererr("Please enter a city");
}

});
async function getWeatherData(city) {
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const res=await fetch(apiurl);
    console.log(res);
    if(!res.ok){
        throw new Error("Could not fetch weather data");
    }
    return await res.json();
}
function displayWeatherInfo(data){
   const {name:city,
    main:{temp,humidity},
    weather:[{description,id}]}=data;
    card.textContent="";
    card.style.display="flex";

    const citydis=document.createElement("h1");
    const tempdis=document.createElement("p");
    const humdis=document.createElement("p");
    const desdis=document.createElement("p");
    const weatheremoji=document.createElement("p");

    citydis.textContent=city;
    tempdis.textContent=`${(temp-273.15).toFixed(1)}°C`;
    humdis.textContent=`Humidity: ${humidity}`;
    desdis.textContent=description;
    weatheremoji.textContent=getweatherEmoji(id);

    citydis.classList.add("citydis");
    tempdis.classList.add("tempdis");
   humdis.classList.add("humdis");
  desdis.classList.add("desdis");
  weatheremoji.classList.add("weatheremoji");

    card.appendChild(citydis);
    card.appendChild(tempdis);
    card.appendChild(humdis);
card.appendChild(desdis);
card.appendChild(weatheremoji);


}
function getweatherEmoji(weatherid){
  switch(true){
    case (weatherid =>200&&weatherid<300):
        return "⛈️";
    case (weatherid =>300&&weatherid<400):
        return "⛈️";
    case (weatherid =>500&&weatherid<600):
         return "⛈️";   
    case (weatherid =>500&&weatherid<600):
            return "❄️"; 
     case (weatherid =>700&&weatherid<800):
                return "🌨️"; 
    case (weatherid ===800):
            return "☀️"; 
            case (weatherid >=801&&weatherid<810):
                return "☁️";
                default:
                    return "❓";
                
  }
}
function dispererr(message){
    
const errdis=document.createElement("p");
errdis.textContent=message;
errdis.classList.add("errdis");
card.textContent="";
card.style.display="flex";
card.appendChild(errdis);
}