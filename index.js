const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const clearButton = document.getElementById("clear");
const list = document.getElementById("un-ordered-list");
const input = document.getElementById("input");

addButton.addEventListener("click", () => {});
removeButton.addEventListener("click", () => {});

clearButton.addEventListener("click", () => {
  
  setTimeout(()=>{
    list.innerHTML = "";
    }, 2000)
    
});
