(function(){

  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem (e) {
    console.log('hello')
    e.preventDefault()

    const text = document.querySelector('[name=item]').value
    const item = {
      text,
      done: false
    }
  console.log(item)
  items.push(item)
  localStorage.setItem('items', JSON.stringify(items))
  populateItems(items, itemsList)
  this.reset()
 }

 function populateItems (plates = [], plateList) {
   const innerText = plates.map((plate, index) => {
     return `<li>
              <input type='checkbox' data-index='${index}' id='item${index}' ${plate.done ? 'checked': ''}/>
              <label for="item${index}"> ${plate.text} </label>
            </li>`
   }).join('')
   plateList.innerHTML = innerText
 }

   function inputChecked (e) {

     if(!e.target.matches('input'))
      return
     console.log(e)
     const key = e.target.dataset.index
     items[key].done = !items[key].done
     localStorage.setItem('items', JSON.stringify(items))
     populateItems(items, itemsList)

   }

  addItems.addEventListener('submit', addItem)
  itemsList.addEventListener('click' , inputChecked)

  populateItems(items, itemsList)

  // Challenge remaining!!
})()
