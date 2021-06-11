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