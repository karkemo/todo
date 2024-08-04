const input = document.getElementById("input-box");
const list = document.getElementById("list-container");
const img = document.getElementById("img");
const h2 = document.getElementById("h2");
const todo = document.getElementById("todo");

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})




function addTask() {
    if(input.value === ''){
        alert('write any thing');
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}

list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML)
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();
//loader
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})