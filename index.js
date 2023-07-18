const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const clearButton = document.getElementById("clear");
const list = document.getElementById("un-ordered-list");
const input = document.getElementById("input");

addButton.addEventListener("click", () => {
  
  const newlistitem = document.createElement("li");
  newlistitem.innerText = input.value;
  list.appendChild(newlistitem)
  input.value = "";
});
  
removeButton.addEventListener("click", () => {
  if(list.hasChildNodes()){
    list.removeChild(list.lastElementChild);
  }else{
    alert('There is nothing to remove in the List');
  }
});

clearButton.addEventListener("click", () => {
  
  if(list.hasChildNodes()){
  setTimeout(()=>{
    list.innerHTML = "";
    }, 2000)
  }else{
    alert('There is nothing to clear in the List');
  }
    
});
