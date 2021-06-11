/*
//Can be used to display entire document variable to console. -AN
//console.log(document);

//querySelector() finds the first element tag and displays it in the console. -AN
const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area");
console.log(area);

const stat = document.querySelector(".stats div");
console.log(stat);

const hello = document.querySelector(".hello");
console.log(hello);

//using querySelectorAll() to find all instances of the element tag. -AN
const buttons = document.querySelectorAll("button");
console.log(buttons);

//You can loop through the NodeList by using a for loop and treating it LIKE an array. -AN
const heading3List = document.querySelectorAll("h3");
for(let element of heading3List.values()){
    console.log(element);
}

//Note: square brackets must be used to access indiviual items in NodeList.
for(let i = 0; i < heading3List.length; i++){
    const element = heading3List[i];
    console.log(element);
}

//Finding all divs containing raitings. -AN
const ratings = document.querySelectorAll(".rating-display .value");

// iterate over entire list
for (let element of ratings.values()) {
  console.log(element);
}
*/

//Starting Updating the DOM Section. -AN
//using innerHTML
const descriptions = document.querySelectorAll(".description-display");
for(let desc of descriptions.values()) {
    let content = desc.innerText;
    if(content.length > 250){
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }
    //console.log(content);
    desc.innerHTML = content;
}

//Adding style with CSS high-rating and removing existing value.
const ratings = document.querySelectorAll(".rating-display .value");
for(let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    //console.log(ratingValue);
    if(ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}

//Creating a new element with text. -AN
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

//Removing DOM elements. -AN
//Get the parent element of all parks.
const main = document.querySelector("main");

//Select a single park. 
//const park = main.querySelector(".park-display");

//Remove that park.
//main.removeChild(park);

