const todoList = [{
    name: 'wash cloth',
    dueDate: '2024-1-12',
},{
    name:'cook food',
    dueDate: '2024-1-12',
}];

renderTodoList();


function renderTodoList(){

    let todoListHtml = '';

//    trying to use foreach to loop through the array
todoList.forEach(function (listItemObject,index){
    let name = listItemObject.name;
    let dueDate = listItemObject.dueDate;
    let html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
    " class="delete-style">Delete</button>`;
    todoListHtml += html; 
});


   /* for (let i = 0; i < todoList.length; i++){
        let listItemObject = todoList[i];
        let name = listItemObject.name;
        let dueDate = listItemObject.dueDate;
        let html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-style">Delete</button>`;
        todoListHtml += html; 
    }*/
   

    document.querySelector('.showList').innerHTML = todoListHtml;
}

function addToList(){
    const inputValue = document.querySelector('.listValue');
    const name = inputValue.value;

    let dateIn = document.querySelector(".dateInput");
    let dueDate = dateIn.value;

    todoList.push({
        name,
       dueDate
    });
   

    inputValue.value = '';
    renderTodoList();
}



/*
// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

for(let i = 0; i < todoList.length; i++){
    let value = todoList[i];
    console.log(value);
} */
/*
const myArray = [1,1,4];
let myResult = 0;
for(let i = 0; i < myArray.length; i++){
    let num = myArray[i];
    myResult += num;
}
console.log(myResult); */