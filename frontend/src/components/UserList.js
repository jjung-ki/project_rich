import React from 'react'
const User = ({user, onRemove, onToggle})=>{
return(
    <div>
        <b style={{
            cursor:'pointer',
            color: user.active ? 'green' : 'black'
            }} onClick={()=>onToggle(user.id)}>
        {user.username}
        </b>
        &nbsp;
        <span>({user.email})</span>
        <button onClick={()=>onRemove(user.id)}>Delete</button>
    </div>
)

}
export default function UserList({users, onRemove, onToggle}) {
   
    return (
        <div>
            {users.map((user,index)=>{
                return(
                    <User key={index} user={user} onRemove={onRemove} onToggle={onToggle}/>
                )
            })}
        </div>
    )
}
