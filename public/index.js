"use strict";
let getInp = document.getElementById('inp');
let getUl = document.getElementById('ul');
let getAdd = document.getElementById('add');
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
    var _a, _b;
    const target = e.target;
    const li = target.closest('li');
    if (target.classList.contains('delete-btn') && li) {
        li.remove();
    }
    else if (target.classList.contains('update-btn') && li) {
        const newValue = prompt('Enter new value:', ((_b = (_a = li.firstChild) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '');
        if (newValue !== null)
            li.firstChild.textContent = newValue + ' ';
    }
});
