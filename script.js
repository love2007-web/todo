let todo = [];
let addBtn = document.getElementById("addBtn");
let todoItem = document.getElementById("todoItem");
let showErr = document.getElementById("showErr")
let showTodo = document.getElementById("showTodo")
let showInp = document.getElementById("showInp")
let editInp = document.getElementById("editInp")
editInp.style.display= "none"
let inPut2 = document.getElementById("inPut2")

let count = 0;
function dispArr() {
    showTodo.innerHTML = "";
    todo.forEach((el, index) => {
        showTodo.innerHTML +=`
        <div id="display">
          <h5 id="text">${index +1} ${el} </h5>
            <div class="btn-div">
                <button id="deleteBtn" onclick='edit(${index})'>Edit</button>         
                <button id="deleteBtn"  onclick='del(${index})'>Delete</button>
            </div>
        </div>         
        `
    })
    todoItem.value = "";
}
    dispArr();
    
    let storage = []
    function addItems() {
        if (todoItem.value == "") {
            showErr.innerHTML = "<p id='err'>" + "Input field cannot be empty"+ "</p>";
        }
        else {
            storage.push(todoItem.value)
            localStorage.setItem("store", JSON.stringify(storage));
            showErr.innerHTML = "<p id='success-msg'>" +"Todo successfully added"+ "</p>";
            todo.push(todoItem.value);
            dispArr()
        }
    }

function del(index) {
    todo.splice(index,1);
    dispArr()
    
}

function edit(timi) {
    count = timi
    editInp.style.display= "block"
    showInp.style.display= "none"
    inPut2.value = todo[timi];

}

function done() {

    todo.splice(count, 1, inPut2.value);
    storage.splice(count, 1, inPut2.value)
    localStorage.setItem("store", JSON.stringify(storage));
    showTodo.innerHTML = "";
    todo.map((sh, rem) => {
        console.log(sh, rem);
        showTodo.innerHTML += `
    <div class="display">
        <h1>${sh}</h1>
        <div>
            <button id='delete-btn' onclick='edit(${rem})'>Edit</button>
            <button id='delete-btn' onclick='del(${rem})'>Delete</button>
          </div>
    </div>
    `
    })
    editInp.style.display= "none"
    showInp.style.display= "block"
    dispArr()
}

// function addItems() {
//     if (input.value === "") {
//         alert("Input Something");
//         return;
//     }
//     else {
//         if (arrayTodo.includes(input.value)) {
//             alert("Items already exist");
//             return;
//         }
//         else {
//             showTodo.innerHTML = "";
//             arrayTodo.push(input.value);
//             arrayTodo.map((arrayElement, index) => {
//                 showTodo.innerHTML += `
//             <div class="display">
//                 <h1 id="arrayItem">${arrayElement}</h1>
//                 <div>
//                     <button id='delete-btn' onclick='edit(${index})'>Edit</button>
//                     <button id='delete-btn' onclick='del(${index})'>Delete</button>
//                  </div>
//             </div>
//             `
//             })
//         }
//     }
// }

// function del(rem) {
//     arrayTodo.splice(rem, 1);
//     showTodo.innerHTML = "";
//     arrayTodo.map((sh, rem) => {
//         console.log(sh, rem);
//         showTodo.innerHTML += `
//     <div class="display">
//         <h1>${sh}</h1>
//         <div>
//             <button id='delete-btn' onclick='edit(${rem})'>Edit</button>
//             <button id='delete-btn' onclick='del(${rem})'>Delete</button>
//           </div>
//     </div>
//     `
//     })
    
// }

// function done(timi) {
//     arrayTodo.splice(rem, 1, inPut2.value);
//     showTodo.innerHTML = "";
//     arrayTodo.map((sh, rem) => {
//         console.log(sh, rem);
//         showTodo.innerHTML += `
//     <div class="display">
//         <h1>${sh}</h1>
//         <div>
//             <button id='delete-btn' onclick='edit(${rem})'>Edit</button>
//             <button id='delete-btn' onclick='del(${rem})'>Delete</button>
//           </div>
//     </div>
//     `
//     })
// }