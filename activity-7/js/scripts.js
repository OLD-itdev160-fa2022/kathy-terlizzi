// Array to hold tasks
var tasks = [];

// Task status enum
var taskStatus = {
    active:'active',
    completed:'completed'
};

//Task constructor function
function Task(id,name,status){
    this.id = id;
    this.name = name;
    this.status = status;
}

// Creates a new task element and adds it to the DOM
function addTaskElement(task){
    //create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    // Set attributes
    taskEl.setAttribute('id',task.id);

    // Add text to task element
    taskEl.appendChild(textEl);

    // Add task element to list
    listEl.appendChild(taskEl);

}

// Click handler to add a new task
function addTask(e){
    var inputEl = document.getElementById('input-task');
    if(inputEl.value !== ''){
        // create a unique id
        var id = 'item-'+tasks.length;

        // create a new task
        var task = new Task(id,inputEl.value,taskStatus.active);
        tasks.push(task);

        // add the task to the DOM
        addTaskElement(task);

        // Reset input
        inputEl.value = '';
    }
}

// click handler to complete a task
function completeTask(e) {
    //Get the task element
    var taskEl = e.target;
    var id = taskEl.id;

    // find corresponding task in tasks array and update status
    for (var i=0; i<tasks.length;i++){
        if(tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    // move task element from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

// OPTIONAL: key press handler to automatically click add task button
function clickButton(e){
    if(e.keyCode === 13){
        document.getElementById('add-task').click();
    }
}

//Initialize the app
function init(){
    //Wire up the add task button click handler.
    document.getElementById('add-task').onclick = addTask;

    //Wire up the completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //Wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;

}

init();