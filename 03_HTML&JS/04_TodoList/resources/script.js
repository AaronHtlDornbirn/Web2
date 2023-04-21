let todos = [
    { id: 1, titel: "putzen", isDone: false },
    { id: 2, titel: "kochen", isDone: true },
    { id: 3, titel: "einkaufen", isDone: false },
    { id: 4, titel: "lernen", isDone: false },
]

let maxid = 4;
printtasks();

document.getElementById("input").addEventListener("change", function (event) {
    console.log(event.target.value);
    maxid++;
    todos.push({ id: maxid, titel: event.target.value, isDone: false })
    printtasks();
    event.target.value = "";
})
function printtasks() {
    let html = "";
    todos.forEach(element => {
        let style = element.isDone ? "green" : "none";
        html += "<div class='task' style='background-color:" + style + "'>" + element.titel + " - " + element.isDone + "<div onClick='setisdone(" + element.id + ")'>Done</div><div onClick='deletetask(" + element.id + ")'>delete</div></div>"
    });
    document.getElementById("todos").innerHTML = html;
}
function deletetask(id) {
    let index = todos.find(element => {
        if (element.id == id) {
            return true;
        }
    })
    todos.splice(index, 1);
    printtasks();
    console.log(index);
}
function setisdone(id) {
    let todo = todos.find(element => {
        if (element.id == id) {
            return true;
        }
    })
    todo.isDone = !todo.isDone;
    printtasks();
    console.log(todo);
}