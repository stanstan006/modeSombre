const inputEl = document.querySelector('#dark-mode');
const bodyEl = document.querySelector('body');

inputEl.checked = JSON.parse(localStorage.getItem('darkMode'));
updatebody()
function updatebody(){
    if (inputEl.checked){
        bodyEl.style.backgroundColor = "black"
    }
    else {
        bodyEl.style.backgroundColor = "white"
    }
}

inputEl.addEventListener("input", ()=>{
    updatebody();
    updateLocalStorage();
}); 

function updateLocalStorage(){
    localStorage.setItem('darkMode',JSON.stringify(inputEl.checked));
}