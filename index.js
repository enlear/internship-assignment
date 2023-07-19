const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const clearButton = document.getElementById("clear");
const list = document.getElementById("un-ordered-list");
const input = document.getElementById("input");

addButton.addEventListener("click", () => {
  //get the user input and remove whitespace
  const userInput = input.value.trim();

  if (userInput !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = userInput;

    list.appendChild(listItem);

    //clear the field after the input completed
    input.value = "";
  } else {
    alert("The input field is empty!");
  }
});

removeButton.addEventListener("click", () => {
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  } else {
    //show alert when list is empty
    alert("The list is empty!");
  }
});

clearButton.addEventListener("click", () => {
  if (list.hasChildNodes()) {
    setTimeout(() => {
      list.innerHTML = "";
    }, 2000);
  } else {
    //show alert when list is empty
    alert("Nothing to clear!");
  }
});
