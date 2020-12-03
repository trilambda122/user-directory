import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const url='https://randomuser.me/api/?results=100&nat=us&seed=userdir'


const UserList = () =>{
// set states
  const [users,setUsers] = useState([])

// fetch data from random user api
const getUsers = async ()=>{
  const response = await fetch(url)
  const usersJSON = await response.json()
  console.log(usersJSON.results)
  setUsers(usersJSON.results)
}
// Use Effect 
useEffect(() => {
  getUsers();
  
},[])

// RENDER return 
  return (
    <React.Fragment>
<h1> A USER LIST</h1>
<table className='table'>
<thead>
  <tr>
    <th scope='col'>IMAGE</th>
    <th scope='col'>FIRST NAME</th>
    <th scope='col'>LAST NAME</th>
    <th scope='col'>EMAIL</th>
    <th scope='col'>PHONE</th>
  </tr>
</thead>
<tbody>
{users.map((user)=>{
 return <tr>
   <th scope='row'><img src={user.picture.thumbnail} alt={user.name.last} className='rounded-circle border border-dark'/></th>
<th scope='row'>{user.name.first}</th>
<th scope='row'>{user.name.last}</th>
<th scope='row'>{user.email}</th>
<th scope='row'>{user.phone}</th>
 </tr>
   
 

// return <li  className='list-group-item' key={user.id.value}> 
// <img src={user.picture.medium} alt={user.name.last} />
// <h4>{user.name.last} , {user.name.first}</h4>
// </li>
})}

</tbody>

</table>


    </React.Fragment>
  
  
  )


}

export default UserList