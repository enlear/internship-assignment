const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const clearButton = document.getElementById("clear");
const list = document.getElementById("un-ordered-list");
const input = document.getElementById("input");

addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    list.appendChild(listItem);
    input.value = "";
  }
});

removeButton.addEventListener("click", () => {
  const listItems = list.getElementsByTagName("li");
  const lastItemIndex = listItems.length - 1;
  if (lastItemIndex >= 0) {
    list.removeChild(listItems[lastItemIndex]);
  }
});

clearButton.addEventListener("click", () => {
  list.innerHTML = "";
});
