const input = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const ul = document.querySelector('ul');
const space = document.querySelector('empty');

addBtn.addEventListener('click', (e) => {

  if (input.value == "") {
    e.preventDefault();
    alert("Agrega texto!")
  } else {

  e.preventDefault();
  

  const text = input.value;
  
  const li = document.createElement('li');
  const p = document.createElement('p');

  p.textContent = text;

  li.appendChild(p);
  li.appendChild(addDeleteBtn());
  ul.appendChild(li);

  input.value = "";
}})

function addDeleteBtn (li) {
  const deleteBtn = document.createElement('button')
  deleteBtn.className = "btn-delete"
  deleteBtn.textContent = "X"

  deleteBtn.addEventListener('click', (e) => {

    const item = e.target.parentElement;

    ul.removeChild(item);
  });

  return deleteBtn
}