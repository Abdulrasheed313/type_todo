"use strict";
let getInp = document.getElementById('inp');
let getUl = document.getElementById('ul');
let getAdd = document.getElementById('add');
getAdd.addEventListener('click', () => {
    getUl.innerHTML += `<li>${getInp.value}  
        <button id="delete">Delete</button> 
        <button id="update">Update</button>
    </li>`;
    getInp.value = "";
});
getUl.addEventListener('click', (e) => {
    var _a, _b;
    const target = e.target;
    const li = target.closest('li');
    if (target.id === 'delete' && li) {
        li.remove();
    }
    else if (target.id === 'update' && li) {
        const newValue = prompt('Enter new value:', ((_b = (_a = li.firstChild) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '');
        if (newValue !== null)
            li.firstChild.textContent = newValue + ' ';
    }
});
