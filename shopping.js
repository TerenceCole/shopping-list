const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// I need an array to hold the state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted!');
  const name = e.currentTarget.item.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // push the items into our state
  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  // clear the form
  e.target.reset();
  displayItems();
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input type="checkbox">
      <span class=itemName">${item.name}</span>
      <button>&times;</button>
  </li>`
    )
    .join('');
  list.innerHTML = html;
}

shoppingForm.addEventListener('submit', handleSubmit);
