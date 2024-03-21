const addBtn = document.getElementById("addBtn");
const addToDo = document.getElementById("addToDo");
const toDoList = document.getElementById("toDoList");
const data = JSON.parse(localStorage.getItem("data"));

console.log(data);

// localStorage.setItem("data", JSON.stringify(data));

function renderTasks() {
    // console.log("ad");
    if(data.length == 0) {
        toDoList.innerHTML = "";
        toDoList.innerHTML += "<h1>LAZY!</h1>";
    } else {
        toDoList.innerHTML = "";
        for(let i = 0; i < data.length; i++) {
            // const li = document.createElement("li");
            // li.innerHTML = data[i];
            // toDoList.appendChild(li);
            toDoList.innerHTML += `<div class="tasks"><p>${data[i]}</p><button id="removeTasks" onclick="removeTasks(${i})">Remove</button></div>`;
        }
    }
}

function removeTasks(id) {
    for(let i = 0; i < data.length; i++) {
        if(i == id) {
            data.splice(i, 1);
            localStorage.setItem("data", JSON.stringify(data));
            renderTasks();
        }
    }
}

addBtn.addEventListener("click", () => {
    let counter = 0;
    // console.log("awdk");
    if(addToDo.value != "") {
        for(let i = 0; i < data.length; i++) {
            if(addToDo.value !== data[i]) {
                counter++;
            }
        }
        if(counter == data.length) {
            data.push(addToDo.value);
            localStorage.setItem("data", JSON.stringify(data));
            addToDo.value = "";
            renderTasks();
            console.log("Done!");
        }
    }
})

addBtn.addEventListener("click", renderTasks());