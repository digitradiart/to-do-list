let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value; /* input the text to be a paragraph inner text */
    toDoContainer.appendChild(paragraph);
    inputField.value = ""; /* return the input text to empty string */
    
    paragraph.addEventListener('dblclick', function(){
        var answer = confirm('Would you like to delete this activity?');
        if (answer === true) {
            toDoContainer.removeChild(paragraph);
        } else {
            paragraph.classList.add("done-paragraph-styling");
            paragraph.style.textDecoration = "line-through";
        }
    })
})