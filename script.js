let inputBox = document.querySelector('.inputbox');
let add = document.querySelector('.add');
let tasklist = document.querySelector('.tasklist');
let mode = false;
let updateTask = null;

add.addEventListener("click", () => {
    let inputValue = inputBox.value.trim();

    if (inputValue === '') return
    if (mode) {
        updateTask.firstChild.textContent = inputBox.value;
        updateTask = null;
        mode = false;
        add.innerText = 'add';
        inputBox.value = "";
    }

    else {
        let task = document.createElement('p');
        // task.innerText = inputValue;

        let span = document.createElement('span');
        span.innerText = inputValue;
        span.classList.add('task-text');
        task.append(span);


        let del = document.createElement('button');
        del.innerText = 'delete';
        task.append(del);
        del.classList.add('delete-btn');
        del.addEventListener("click", () => task.remove())

        let edit = document.createElement('button');
        edit.innerText = 'edit';
        task.append(edit);
        edit.classList.add('edit-btn');

        edit.addEventListener("click", () => {
            inputBox.value = task.firstChild.textContent;
            add.innerText = 'update';
            mode = true;
            updateTask = task;
        })

        tasklist.append(task);
        inputBox.value = '';
    }
})
