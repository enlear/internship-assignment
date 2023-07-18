const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const clearButton = document.getElementById("clear");
const list = document.getElementById("un-ordered-list");
const input = document.getElementById("input");

/*Completed the tasks given (I am not familair with javascript syntax so i had to check google 
and to add list element inside the unordered list i had to check a youtube video).
I was able to complete the requirements given.
Thank you for selecting me for this round and for the opportunity
*/

//Counter for the li-items in the unordered list
let liCount = 0;

addButton.addEventListener("click", () => {
  //Checking whether text is entered to the input text box
  if (String(input.value) == ""){
    alert("Please add a TODO text before clicking the Add button")
  }
  //Not empty text input execute below
  else{
    //Passing the input value as String to the function
    addTodo(String(input.value))
  }
});

removeButton.addEventListener("click", () => {
  //Alerting to show no TODO list available to remove
  if (liCount == 0){
    alert("Add a TODO first")
  }
  //When available
  else{
    //Removing child from the list
    //Getting the li element by the id and decrementing the count to remove from bottom
    list.removeChild(document.getElementById(`li-item${liCount}`))
    //Reducing count
    liCount--
  }

});

clearButton.addEventListener("click", () => {
  //checking wether the list is already empty
  if (list.innerHTML == ""){
    alert("No TODOs to clear")
  }
  //If not empty
  else{
    //function to clear the list
    const removeList = () => list.innerHTML = ""
    //Timeout before executing the function
    //2000 = 2 seconds
    setTimeout(removeList, 2000)
    //Counter becomes 0 as no list items are available
    liCount = 0
  }
});

//Function to add TODO
const addTodo = (inputText) =>{
  //creating an elment li 
  let li = document.createElement("li")

  //Giving the li elements an id with a count increment
  liCount++
  li.id = `li-item${liCount}`

  //setting the li element content to the input value
  li.innerHTML = String(inputText)

  //Appending the li to the list 
  list.appendChild(li) 

  //making the input value blank after adding to list
  input.value =""
}