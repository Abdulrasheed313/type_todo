let getInp = document.getElementById('inp') as HTMLInputElement;
let getUl = document.getElementById('ul') as HTMLUListElement;
let getAdd = document.getElementById('add') as HTMLButtonElement;

getAdd.addEventListener('click', () => {
    getUl.innerHTML += `<li>${getInp.value}  
        <button id="delete">Delete</button> 
        <button id="update">Update</button>
    </li>`;
    getInp.value = "";
});

getUl.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const li = target.closest('li');

    if (target.id === 'delete' && li) {
        li.remove();
    } 
    else if (target.id === 'update' && li) {
        const newValue = prompt('Enter new value:', li.firstChild?.textContent?.trim() || '');
        if (newValue !== null) li.firstChild!.textContent = newValue + ' ';
    }
});
