// adding todos
const addForm=document.querySelector('.add');
const todoList=document.querySelector('.todos');
const search=document.querySelector('.search input');

const template=((todo)=>{
  const html=`
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
              </li>
  `
  todoList.innerHTML+=html;
})

addForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const todo=addForm.add.value.trim();
  if(todo.length){
    template(todo);
    addForm.reset();
  }
    
});

// deleting todo
todoList.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

// searching todos in todo list
const filteredTodo=(term=>{
  Array.from(todoList.children)
    .filter(todo=>{
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach(todo=>{
      todo.classList.add('filtered');
    });

  Array.from(todoList.children)
  .filter(todo=>{
    return todo.textContent.toLowerCase().includes(term);
  })
  .forEach(todo=>{
    todo.classList.remove('filtered');
  });
});


search.addEventListener('keyup',()=>{
  const term=search.value.trim().toLowerCase();
  filteredTodo(term);
});