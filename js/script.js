//question 1

const cat = {
    complain: function(){
        console.log("Meow!")
    }
}

cat.complain();


//question 2
var heading = document.querySelector("h3")

heading.innerHTML = "Updated heading"


//question 3

heading.style.fontSize = "2em"


//question 4



//question 5

const paragraphs = document.querySelectorAll("p")

for(let i = 0; i < paragraphs.length; i++){
    // console.dir(paragraphs[i].innerHTML);
    paragraphs[i].style.color = "red"
}



//question 6
var resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>"
resultsContainer.style.backgroundColor = "yellow"