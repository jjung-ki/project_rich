import React from 'react';

//import './App.css';
import CreateUser from './components/CreateUser'
import Counter from './components/Counter'
import UserList from './components/UserList'

const initialState = {
  inputs : {
    username : '',
    email : ''
  },
  users : [{
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com',
    active: true
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com',
    active: false
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com',
    active: false
  }
]}
function reducer(state, action){
  switch(action.type){
    case 'CREATE':
      return {inputs: initialState.inputs,
      users:state.users.concat(action.user)}
    case 'CHANGE':
      return {...state, inputs:{...state.inputs,[action.name]:action.value}}
    default:
      return state 
  }
}
function App() {
  // reducer 의 기본 틀을 만들기 위해서는 기존에 사용할  여러 state 값들을 객체 형태로 만들어서 만들어 주는게 좋다.
  // 따라서 내가 여러개의 state 값을 쓰기로 했다면 초기의 state 값이 될 여러 객체를 만들어 놓는게 좋다.
 
 


const[state, dispatch] = React.useReducer(reducer,initialState)
const cur_id = React.useRef(3)
// 요 아래 값들이  setState할때 사용했던 값들 하나로 통합을 위해 initialState에 객체 타입으로 해서 넣어 놓음
const {users} = state
//const {username, email} = state.inputs
  

  const onChange = (e)=>{
    const {name, value} = e.target
    console.log(name, value)
    dispatch({
      type:"CHANGE",
      name,
      value

    }) 
  }

  const onCreate = ()=>{

   dispatch({
     type:'CREATE',
     user : {
       id:cur_id.current += 1,
       username : state.inputs.username,
       email :state.inputs.email,
       active : true

     }
   })
  }

  const onRemove = (userId)=>{
    //setUsers(users=>users.filter(user=>user.id !== userId))
  }

  const onToggle = (userId)=>{
    //setUsers(prevUser=>prevUser.map(user=> user.id === userId ? {...user, active:!user.active}:user)
    //)
  }
  return (
   <>
    <CreateUser onChance={onChange} onCreate={onCreate}/>
    <Counter />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
   </>
  );
}

export default App;
