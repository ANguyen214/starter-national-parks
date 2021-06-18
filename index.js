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

/*********************************************************************/
//Starting Updating the DOM Section. -AN
//using innerHTML
// const descriptions = document.querySelectorAll(".description-display");
// for(let desc of descriptions.values()) {
//     let content = desc.innerText;
//     if(content.length > 250){
//         content = content.slice(0, 250);
//         content = content + '<a href="#">...</a>';
//     }
//     //console.log(content);
//     desc.innerHTML = content;
// }

// //Adding style with CSS high-rating and removing existing value.
// const ratings = document.querySelectorAll(".rating-display .value");
// for(let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);
//     //console.log(ratingValue);
//     if(ratingValue > 4.7) {
//         rating.classList.add("high-rating");
//         rating.classList.remove("value");
//     }
// }

// //Creating a new element with text. -AN
// const parks = document.querySelectorAll(".park-display");
// const numberParks = parks.length;
// const newElement = document.createElement("div");
// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");
// const header = document.querySelector("header");
// header.appendChild(newElement);

//Removing DOM elements. -AN
//Get the parent element of all parks.
//const main = document.querySelector("main");

//Select a single park. 
//const park = main.querySelector(".park-display");

//Remove that park.
//main.removeChild(park);


/**************************************************************/
//Starting Event Listeners Section 

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (event) => {
//     console.log("You clicked the button", event.target);
// });

//Selects all buttons for all parks.
//const allBtns = document.querySelectorAll(".rate-button");

//Iterates through the list of buttons and adds an event handler for each.
// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         console.log(event.target.parentNode);
//     });
// });

//Example of manipulating this element. Changes color of the section when clicked.
// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       const park = event.target.parentNode;
//       park.style.backgroundColor = "#c8e6c9";
//     });
//   });

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// // Add an event listener
// nameSorter.addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log("You clicked the name sorter");
// });

nameSorter.addEventListener("click", (event) => {
    event.preventDefault();

    //1. Get the main element
    const main = document.querySelector("main");

    //2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");

    //3. Empty the main element
    main.innerHTML = " ";

    //4. Create an array
    const parksArray = Array.from(parksList);

    //5. Sort the array
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if(parkAName < parkBName) {
            return -1;
        } else if (parkAName > parkBName) {
            return 1;
        } else {
            return 0;
        }
    });

    //6. Insert each park into the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
});

//The code above can be refactored by creating separate functions.
//One for handling the sorting and one for nameSorter. 
// Function for sorting by name
// const sortByName = (parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   };
  
//   // Function for handling the `nameSorter` click
//   const nameSorterClickHandler = (event) => {
//     event.preventDefault();
  
//     // 1.  Get the main element
//     const main = document.querySelector("main");
  
//     // 2. Get the list of parks
//     const parksList = main.querySelectorAll(".park-display");
  
//     // 3. Empty the main
//     main.innerHTML = "";
  
//     // 4. Create an array
//     const parksArray = Array.from(parksList);
  
//     // 5. Sort the array
//     parksArray.sort(sortByName);
  
//     // 6. Insert each park into the DOM
//     parksArray.forEach((park) => {
//       main.appendChild(park);
//     });
//   };
  
//   // Select the `nameSorter` link
//   const nameSorter = document.querySelector("#name-sorter");
  
//   // Add an event listener
//   nameSorter.addEventListener("click", nameSorterClickHandler);

//Attempting to sort by rating
const sortByRating = (ratingA, ratingB) => {
    const parkARating = ratingA.querySelector(".rating-display stat.value");
    const parkBRating = ratingB.querySelector(".rating-display stat.value");

    if(parkARating < parkBRating) {
        return -1;
    } else if(parkARating > parkBRating) {
        return 1;
    } else {
        return 0;
    }
}

const ratingSorterHandler = (event) => {
    event.preventDefault();

    const main = document.querySelector("main");
    const parkRatingsList = main.querySelectorAll(".value");

    main.innerHTML = " ";

    const parksRatingsArray = Array.from(parkRatingsList);

    parksRatingsArray.sort(sortByRating);

    parksRatingsArray.forEach((park) => {
        main.appendChild(park);
    });
}

const ratingSorter = document.querySelector("#rating-sorter");
ratingSorter.addEventListener("click", ratingSorterHandler);

