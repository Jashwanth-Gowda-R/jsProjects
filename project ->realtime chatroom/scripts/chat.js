// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom{
    constructor(room,username){
        this.room=room;
        this.username=username;
        this.chats=db.collection('chats');
        this.unsub;
    }
    async addChat(message){
        // format a data object
        const now= new Date();
        const chat={
            message,
            username:this.username,
            room:this.room,
            created_at:firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document
        const response=await this.chats.add(chat);
        return response;
    }
    getChats(callback){
        this.unsub=this.chats
        .where('room','==',this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    // update ui
                    callback(change.doc.data());
                }
            });
        })
    }
    updateName(username){
        this.username=username;
        localStorage.setItem('username',username);
    }
    updateRoom(room){
        this.room=room;
        console.log('room updated')
        if(this.unsub){
            this.unsub();
        }

    }
     
}

// const chat=new Chatroom('gaming','shani');
// // // console.log(chat);
// // chat.addChat('hello guys').then(()=>{
// //     console.log('added to db');
// // }).catch(err=>console.log(err));

// chat.getChats(data=>{
//     console.log(data);
// })

// setTimeout(()=>{
//     chat.updateRoom('general');
//     chat.updateName('msd');
//     chat.getChats(data=>{
//         console.log(data);
//     });
//     chat.addChat('bye bro')
// },3000);