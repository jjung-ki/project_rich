import React from 'react'

export default function CreateUser({username, email, onChance, onCreate}) {
    

    return (
        <div>
            <input name="username" placeholder="account name" onChange={onChance} value={username}/>
            <input name="email" placeholder="email" onChange={onChance} value={email}/>
            <button onClick={onCreate}>create</button>        
        </div>
    )
}
