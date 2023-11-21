import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
const Chatpage = () => {
 const [chats,setChats]=useState([]);
    const fetchchats=async()=>{
        const {data}=await axios.get('/api/chat')
        setChats(data);
    }
    useEffect(()=>{
     fetchchats();
    },[])
  return (
    <div>
     {
      chats.map((chat)=>{
        return (
         <div key={chat._id}>

          <div> {chat.chatName} </div>  
          <div>   {chat.users[0].email} </div>   
         </div>
        
        )
      })
     }
    </div>
  )
}

export default Chatpage
