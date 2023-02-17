// Const
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const clearLocalStorageButton = document.getElementById('clearLocalStorage');

// Create a new item
document.querySelector('#enter').addEventListener('click', () => {
  const item = document.querySelector('#item');
  createItem(item);
});

function createItem(item){
  itemsArray.push(item.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  location.reload();

  if(item.value === ""){
    alert("Please enter a valid item");
    deleteItem(itemsArray.length - 1);
  }
}

// clear local storage
clearLocalStorageButton.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});


// Display all items
// Loop through localStorage and display the items
function displayItems(){
  let items = "";
for (let i = 0; i < itemsArray.length; i++) {
  items += `<div class="item">
  <div class="input-field">
    <textarea disabled>${itemsArray[i]}</textarea>
    <div class="edit-controller">
    </div>
  </div>
  <div>
    <button class="removeItem">Remove</button>
  </div>
</div>`;
  }
  document.querySelector('#displayArea').innerHTML = items;
  activateRemoveItem();
}

// Remove item 
function activateRemoveItem(){
  let removeItemButton = document.querySelectorAll('.removeItem');
  removeItemButton.forEach((removeItemButton, i) => {
    removeItemButton.addEventListener('click', () => {
      deleteItem(i);
    });
  });
}

function deleteItem(i){
  itemsArray.splice(i, 1);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  location.reload();
}

// Console log items
console.log(itemsArray);

//window.onload = displayItems();
window.onload = () => {
  displayItems();
};

// Toggle Button to see the list
function toggle(){
  let X = document.getElementById("toggle");
  if(X.style.display === "none"){
    X.style.display = "block";
  }
  else{
    X.style.display = "none";
  }
}