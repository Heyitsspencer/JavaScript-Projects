//This function gets the task from the input
function get_todos() {
    //This creates an array of tasks that are inputed
    var todos = new Array;
    //This pulls the task that was saved in the web browsers memory
    var todos_str = localStorage.getItem('todo');
    //If the input is not null then JSON.parse will
    //communicate with the web browser to make the task a JavaScript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//This function adds the inputed task to the get_todos function array
function add() {
    //This takes the inputed task and creates a variable of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //This adds a new task the end of the array
    todos.push(task);
    //This converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show ();
    return false;
}

//This function keeps the tasks permanatley displayed on the screen
function show() {
    //This sets the task that was retrieved as a variable
    var todos = get_todos();

    //This sets up each tassk as an unordered list
    var html = '<ul>';
    //This displays the task as a list
    document.getElementById('todos').innerHTML = html;

    //this tells the browseer how to display the todo array after an item has been removed
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
//This displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
//this will keep the inputs displayed permanately on the screen
show();
//This creates the functionality of removing a todo item from the array
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    //this looks in the show() how to diisplay a removed item on the screen
    show ();

    return false;
}