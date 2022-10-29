//Part 1

// Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!
// Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.


function addStrikethrough(){
    let argumentItem1 = document.querySelector("li")
    argumentItem1.style.textDecoration = "line-through"

}
addStrikethrough()

//Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
// Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!

function setImage(id, url){

    let image = document.querySelector("#" + id);
    image.src = url;
    image.style.height = "300px"
}

setImage("image-1"," https://a.cdn-hotels.com/gdcs/production181/d1330/2bb1f845-23eb-44f8-88ac-df32ab37cb7a.jpg?impolicy=fcrop&w=800&h=533&q=medium")
setImage("image-2", "https://a.cdn-hotels.com/gdcs/production86/d1619/5dfcd0fa-db2f-45b5-8790-48a7ada61081.jpg?impolicy=fcrop&w=800&h=533&q=medium")
setImage("image-3", "https://a.cdn-hotels.com/gdcs/production126/d1421/11d188b3-38f4-4842-88f6-a928f14b5581.jpg?impolicy=fcrop&w=800&h=533&q=medium")

// This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
// Now use it to remove the first two items from that list. You'll need to call it twice!

function removeArgument(){
    let itemToRemove = document.querySelector("li");
    itemToRemove.remove()
}
removeArgument()
removeArgument()

// Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
// Try using it to change the size of any text on the page.

function thatText(size, id){
    let fontSize = document.querySelector("#" + id);
      
     fontSize.style.fontSize = size;
}

thatText("30px", "Faith")
thatText("35px", "code")

// Write a function that takes in a DOM element and appends it to the Arguments <ul>.

//element = ANY DOM ELEMENT
function addElementToList(element){
     let arguments = document.querySelector("#arguments")
     arguments.appendChild(element)
}

let newImage = document.createElement("img")
newImage.src = "https://media.audleytravel.com/-/media/images/home/caribbean/st-vincent/country-guides/highlights-of-st-vincent-and-the-grenadines/istock_50182068_st_vincent_and_the_grenadines_union_island.webp?q=60&w=1600&h=533";
newImage.style.height = "200px"


addElementToList(newImage)

// Write a function that takes in an image element and modifies its height to be 30 pixels.

function modHeight(element){
    let newElement = document.querySelector("#image-2")
    newElement.style.height = "30px"
}

modHeight("30px")

// Let's use it. Query an image element and then pass it into the function.

let img1 = document.querySelector("#image-3")

function anotherImage(img1){
    img1.style.width = "100px"
    img1.style.height = "100px"
  
}

// Write a function that takes in an element and gives it the class invisible.

let e1 = document.querySelector(".h1")

function invisible(img){
    
    e1.style.visibility = "invisible"
}

// Write a function that takes in text and returns a new <li> with the given text parameter as its innerText.

let text = document.querySelector("#thing-2")


    text = text.innerText = "Not thing 2!"

    // Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).

    function addElementToList(e2){
        let text = document.querySelector("Not-thing-2")
        text.appendChild(e2)
   }

//    Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an <h3>) with that text in it.

   