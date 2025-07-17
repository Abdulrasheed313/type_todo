let getInp = document.getElementById('inp') as HTMLInputElement;
let getUl = document.getElementById('ul') as HTMLUListElement;
let getAdd = document.getElementById('add') as HTMLButtonElement;

getAdd.addEventListener('click', () => {
    getUl.innerHTML += `
        <li class="d-flex flex-wrap justify-content-between align-items-center border p-2 m-2 text-capitalize border-primary">
            
        ${getInp.value}  
            <span>
                <button class="btn btn-success delete-btn">Delete</button> 
                <button class="btn btn-primary update-btn">Update</button>
            </span>
        </li>`;
    getInp.value = "";
});

getUl.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const li = target.closest('li');

    if (target.classList.contains('delete-btn') && li) {
        li.remove();
    } 
    else if (target.classList.contains('update-btn') && li) {
        const newValue = prompt('Enter new value:', li.firstChild?.textContent?.trim() || '');
        if (newValue !== null) li.firstChild!.textContent = newValue + ' ';
    }
});
