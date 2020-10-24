import React,{useState} from 'react';

//import './App.css';
import CreateUser from './components/CreateUser'
import Counter from './components/Counter'
import UserList from './components/UserList'
function App() {
 
  const [inputs, setInputs] = useState({
    username:'',
    email : ''
  });
const cur_id = React.useRef(3)
  const [users, setUsers] = useState([{
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
  }])
  

  const onChange = (e)=>{
    const {value, name} = e.target
    setInputs({
      ...inputs,
      [name]:value,
    })
  }

  const onCreate = ()=>{
    
    const new_user = {
      id : cur_id.current+1,
      username : inputs.username,
      email: inputs.email,
      active:false,
    }
    setUsers(users=>users.concat(new_user))
    console.log("cur id : ",cur_id)
  }

  const onRemove = (userId)=>{
    setUsers(users=>users.filter(user=>user.id !== userId))
  }

  const onToggle = (userId)=>{
    setUsers(prevUser=>prevUser.map(user=> user.id === userId ? {...user, active:!user.active}:user)
    )
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
