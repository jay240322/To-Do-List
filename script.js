const taskContainer = document.querySelector('.task-container');
const submitButton = document.querySelector('#submit');
const textBox = document.querySelector('#input');


function addTask() {
    const taskText = textBox.value.trim();
    if (taskText) {
       
        taskContainer.style.height = '390px';
        taskContainer.style.overflow = 'auto';

        //generate task div where text displayed
        const task = document.createElement('div');
        task.className = 'task';
        task.textContent = taskText;
        
        //generate container which have two buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';
        
        //generate delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #ffffff;"></i>';
        deleteButton.addEventListener('click', () => {
            taskContainer.removeChild(task);
        });

        //generate complete button
        const completeButton = document.createElement('button');
        completeButton.className ='complete-button';
        completeButton.innerHTML = '<i class="fa-solid fa-check" style="color: #ffffff;"></i>';
        completeButton.addEventListener('click', () => {
            task.style.textDecoration = 'line-through';
        });

        buttonContainer.appendChild(deleteButton);
        buttonContainer.appendChild(completeButton);
        task.appendChild(buttonContainer);
        taskContainer.appendChild(task);
        textBox.value = '';
    }
}

//add event listener to submit button 'enter' event
submitButton.addEventListener('click', addTask);

textBox.addEventListener('keydown', (event) => {
    //represent the enter button
    if (event.key === 'Enter') {
        addTask();
    }
});