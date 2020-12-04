import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './UserCard'
import {faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from './UserCard'

const url='https://randomuser.me/api/?results=100&nat=us&seed=userdir'


const UserList = () =>{
// set states
  const [users,setUsers] = useState([])

  // sort by last name A-Z
const sortNamesAscending = (userObj)=>{  
const newList = [...users].sort((a,b)=> {
  return a.name.last > b.name.last ? 1: -1
})
setUsers(newList)
  }

    // sort by last name Z-A
  const sortNamesDescending = (userObj)=>{  
    const newList = [...users].sort((a,b)=> {
      return b.name.last > a.name.last ? 1: -1
    })
    setUsers(newList)
      }



// fetch data from random user api
const getUsers = async ()=>{
  const response = await fetch(url)
  const usersJSON = await response.json()
 
  setUsers(usersJSON.results)
}
// Use Effect 
useEffect(() => {
  getUsers();
  
},[])

// RENDER return 
  return (
    <React.Fragment>
  
{/* setup the table strcuture  */}
<table className='table'>
<thead className='thead-light'>
  <tr>
    <th scope='col'></th>
    <th scope='col'>Name  <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={(e)=>{sortNamesAscending(users)}}/> <FontAwesomeIcon icon={faArrowAltCircleDown} onClick={(e)=>{sortNamesDescending(users)}}/></th>
    <th scope='col'>Phone</th>
    {/* <th scope='col'>PHONE</th> */}
  </tr>
</thead>
<tbody>
{/* loop over users object array that was returned from the api call  */}
{users.map((user)=>{
 return <tr key={user.login.uuid}>
   <th scope='row'><img src={user.picture.thumbnail} alt={user.name.last} className='rounded-circle border border-secondary shadow-lg'/></th>
<th scope='row' >{user.name.last},{user.name.first}</th>
{/* <th scope='row'>{user.name.last}</th> */}
{/* <th scope='row' className='font-weight-lighter'>{user.email} </th> */}
<th scope='row' style={{fontSize:'12px'}} className=''>{user.phone}</th>
 </tr>

})}

</tbody>

</table>
    </React.Fragment>
  
  
  )


}

export default UserList