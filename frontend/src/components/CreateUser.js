import React from 'react'

export default function CreateUser({username, email, onChance, onCreate}) {
    

    return (
        <div>
            <input name="username" placeholder="account name" onChange={e=>onChance(e)} value={username}/>
            <input name="email" placeholder="email" onChange={e=>onChance(e)} value={email} onKeyPress={e=>onCreate(e)}/>
            <button onClick={onCreate}>create</button>        
        </div>
    )
}
