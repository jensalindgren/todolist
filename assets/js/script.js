const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

console.log(itemsArray)

document.addEventListener('click', () => {
    const item = document.querySelector('#item')
    createItem(item)
})

function createItem(item) {
    itemsArray.push(item.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    
}
