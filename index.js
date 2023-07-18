const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const clearButton = document.getElementById("clear");
const list = document.getElementById("un-ordered-list");
const input = document.getElementById("input");

addButton.addEventListener("click", () => {

  const listItemText = input.value.trim();
  //check whether input area empty or not
  if (listItemText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = listItemText;

    list.appendChild(listItem);
    //make empty after add the value to the list
    input.value = "";
  }
  else {
    // alert("The value cannot be empty");
  }
});
removeButton.addEventListener("click", () => {

});

clearButton.addEventListener("click", () => {

  setTimeout(() => {

    list.innerHTML = "";
    
  }, 2000); // make clear list after 2 second after button clicked
});
