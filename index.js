const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const clearButton = document.getElementById("clear");
const list = document.getElementById("un-ordered-list");
const input = document.getElementById("input");


addButton.addEventListener("click", addListItem);
removeButton.addEventListener("click", removeListItem);


clearButton.addEventListener("click", () => {
  setTimeout(() => {
    list.innerHTML = "";
  }, 2000);

}
);


function addListItem() {
  let newItem = document.createElement('li');

  if (input.value !== "") {
    newItem.textContent = input.value;
    list.appendChild(newItem);
    input.value = "";
  }
  else {
    alert("Please input an item")
  }
}

function removeListItem() {
  //last child of list

  let lastItem = list.lastElementChild;
  list.removeChild(lastItem);
}
