const selectAllButton = document.getElementById('task-btn');
const inputElement = document.getElementById('task-input');
const ulElement = document.getElementById('control-list')
let todoList = [];

selectAllButton.addEventListener('click', () => {

    for (let todoItem of todoList) {
        todoItem.selected = true
    }
    upgrade()
});
inputElement.addEventListener('keydown', (event) => {

    if ((event.key === 'Enter' || event.keyCode === 13) && (inputElement.value != '') )  {
        // add task to array
        todoList.unshift({
            content: inputElement.value,
            done: false,
            selected: false
        })

        // clear input area
        inputElement.value = ''
        upgrade()
    }
})
function upgrade() {
    ulElement.innerHTML = ''
    for (let index = 0; index < todoList.length; index++) {
        let todoItem = todoList[index]
        const liElement = document.createElement('li')
        liElement.className = 'control-list__item'
        ulElement.append(liElement)

        const checkboxElement = document.createElement('input')
        checkboxElement.type = 'checkbox'
        checkboxElement.id = 'todoItem' + index
        checkboxElement.checked = todoItem.selected
        liElement.append(checkboxElement)

        const labelElement = document.createElement('label')
        labelElement.className = 'checkbox'
        labelElement.setAttribute('for', 'todoItem' + index)
        labelElement.innerText = todoItem.content
        liElement.append(labelElement)

        const btnDoneElement = document.createElement('button')
        btnDoneElement.className = 'control-add-btn btn'
        if (todoItem.done) {
            labelElement.className += ' todo-done'
        }
        btnDoneElement.type = 'button'
        btnDoneElement.innerText = 'DONE'
        liElement.append(btnDoneElement)

        const btnRemoveElement = document.createElement('button')
        btnRemoveElement.className = 'control-remove-btn btn'
        btnRemoveElement.type = 'button'
        btnRemoveElement.innerText = 'REMOVE'
        liElement.append(btnRemoveElement)

        btnDoneElement.addEventListener('click', () => {
            todoItem.done = !todoItem.done
            upgrade()
        })
        btnRemoveElement.addEventListener('click', () => {
            ulElement.removeChild(liElement)
            todoList.shift()
            upgrade()
        })
        checkboxElement.addEventListener('change', () => {
            todoItem.selected = checkboxElement.checked
        })
    }
}
document.getElementById('done-btn').addEventListener('click', () => {
    for (let todoItem of todoList) {
        if (todoItem.selected) {
            todoItem.done = true
            todoItem.selected = false
        }
    }
    upgrade()
})

document.getElementById('restore-btn').addEventListener('click', () => {
    for (let todoItem of todoList) {
        if (todoItem.selected) {
            todoItem.done = false
            todoItem.selected = false
        }
    }
    upgrade()
})

document.getElementById('removed-btn').addEventListener('click', () => {
    for (let todoItem of todoList) {
        if (!todoItem.selected) {
            todoList = [{ ...todoItem }]
        } else {
            todoList = []
        }

    }

    // ulElement.innerHTML = '';
    upgrade()
})