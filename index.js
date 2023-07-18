const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const clearButton = document.getElementById("clear");
const list = document.getElementById("un-ordered-list");
const input = document.getElementById("input");

addButton.addEventListener("click", () => {
  const userInput = input.value.trim();

  if (userInput !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = userInput;
    list.appendChild(newItem);
    input.value = "";
  }
});


removeButton.addEventListener("click", () => {
  const listItems = document.querySelectorAll("li");

  if (listItems.length > 0) {
    const lastItemIndex = listItems.length - 1;
    const lastItem = listItems[lastItemIndex];

    lastItem.remove();
  }
});


clearButton.addEventListener("click", () => {
  setTimeout(() => {
    list.innerHTML = "";
  }, 2000);
});
