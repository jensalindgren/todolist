// Const
const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const clearLocalStorageButton = document.getElementById('clearLocalStorage');
const removeItemButton = document.getElementById('removeItem');
const displayArea = document.getElementById('displayArea');

// Create a new item

document.querySelector('#enter').addEventListener('click', () => {
  const item = document.querySelector('#item');
  createItem(item);
});
function createItem(item){
  itemsArray.push(item.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  location.reload();
}

// Remove an item and clear local storage

removeItemButton.addEventListener('click', () => {
  localStorage.removeItem('items', JSON.stringify(itemsArray));
  location.reload();
});

clearLocalStorageButton.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});


// Display all items

for (let i = 0; i < localStorage.length; i++) {

  const item = document.createElement('div');
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  item.innerHTML = `<li>${key}: ${value}</li>`;
  displayArea.appendChild(item);
}

console.log(itemsArray);