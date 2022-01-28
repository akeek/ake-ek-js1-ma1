//question 1

const cat = {
    complain: function(){
        console.log("Meow!");
    }
}

cat.complain();




//question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";




//question 3

heading.style.fontSize = "2em";




//question 4

heading.className = "subheading";
console.log(heading);




//question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}




//question 6
var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>"New paragraph"</p>`;
resultsContainer.style.backgroundColor = "yellow";




//question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catFunction(list) {
    for(let i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}

catFunction(cats);




//question 8

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
    for(let i = 0; i < cats.length; i++){
        const catName = cats[i].name;
        let catAge = cats[i].age || "Age unknown";
        // if(catAge === undefined){
        //     catAge = ("Age unknown");
        // }
        catContainer.innerHTML += `<div><h5>${catName}</h5><p>${catAge}</p></div>`;
    }
}

createCats(cats);
