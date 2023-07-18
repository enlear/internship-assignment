const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const clearButton = document.getElementById("clear");
const list = document.getElementById("un-ordered-list");
const input = document.getElementById("input");

addButton.addEventListener("click", () => {
  
  if(input.value != ""){
    let create_list = document.createElement("li");
    create_list.appendChild(document.createTextNode(input.value));
    list.appendChild(create_list);

    input.value = ""
  }
  else{
    alert("Please enter your TO-DO item!!");
  }
});

removeButton.addEventListener("click", () => {

  if(list.childElementCount >0 ){
    list.removeChild(list.lastElementChild);
  }
  else{
    alert("Your TO-DO list is Empty!!");
  }

});

clearButton.addEventListener("click", () => {
  list.innerHTML = "";
});
