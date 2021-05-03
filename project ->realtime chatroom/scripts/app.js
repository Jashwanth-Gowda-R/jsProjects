// dom queries
const chatlist=document.querySelector('.chat-list')
const newchatform=document.querySelector('.new-chat')
const newnameform=document.querySelector('.new-name')
const updatemsg=document.querySelector('.update-mssg')
const rooms=document.querySelector('.chat-rooms')

newchatform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=newchatform.message.value.trim();
    chat.addChat(message).then(()=>{
        newchatform.reset();
    }).catch((err)=>{
        console.log(err);
    })
})

newnameform.addEventListener('submit',(e)=>{
    e.preventDefault();
    // update name via chatroom
    const name=newnameform.name.value.trim();
    chat.updateName(name);
    // reset the form
    newnameform.reset();
    // show then hide the update message
    updatemsg.innerText=`your name is updated to ${name}`;
    setTimeout(()=>updatemsg.innerText='',3000);
})

rooms.addEventListener('click',(e)=>{
    // console.log(e);
    if(e.target.tagName==='BUTTON'){
        chatUi.clear();
        chat.updateRoom(e.target.getAttribute('id'));
        chat.getChats(chat=>chatUi.render(chat));
    }
});




// check local storage for name
const username=localStorage.username ? localStorage.username:'unknown';


// class instances
const chatUi=new ChatUi(chatlist);
const chat=new Chatroom('gaming',username);

// get chats & render
chat.getChats(data=>{
    // console.log(data);
    chatUi.render(data);
})
