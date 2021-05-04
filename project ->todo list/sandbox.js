// getting reference to forms and lists
const addForm=document.querySelector('.add');
const todoList=document.querySelector('.todos');
const search=document.querySelector('.search input');
// html template to add items into list
const template=((todo)=>{
  const html=`
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
              </li>
  `
  todoList.innerHTML+=html;
})

// adding todos,
// here input todo is taken and
//  tested if it is empty or not then function is called and
// then form is rested
addForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const todo=addForm.add.value.trim();
  if(todo.length){
    template(todo);
    addForm.reset();
  }
});

// deleting todo,
// based on click event using parent children relationship
todoList.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});

// function to filter todos,
// here we are filtering out the todo which does not contain term and then add them with css class to hide them.finally we get one array
// then to remove the css filtered class, we again repeat the process in opposite way
// then to deal with the uppercase word typed which cannot be recognize so converting everything to lowercase
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

// searching todos in todo list,
// using keyup event and filteredTodo function to filter items
search.addEventListener('keyup',()=>{
  const term=search.value.trim().toLowerCase();
  filteredTodo(term);
});