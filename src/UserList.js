import React, {useState,useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css'
import './UserCard'
import SearchBar from './SearchBar';
import {faAddressCard, faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope,faPhone,faMobile,faAdressCard} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from './UserCard'
import './style.css'

const url='https://randomuser.me/api/?results=100&nat=us&seed=userdir'

let singleUser ={}

const UserList = () =>{
// set states
  const [users,setUsers] = useState([])
  // const [showCard,setShowCard] = useState(false)
  const [isOpen, setIsOpen] = React.useState(false);

  // Modal Functions
  const showModal = (image,name,streetAddress,cityState,email,phone,cell) => {
    // name,phone,cell,email,location,picture
    singleUser={
      image,
      name,
      streetAddress,
      cityState,
      email,
      phone,
      cell
    }
    setIsOpen(true);
    console.log('---showing----')
    console.log(singleUser)
    console.log('---showing----')
  };
  const hideModal = () => {
    setIsOpen(false);
  };


  const createSingleUser = ()=>{

  }
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



// Use Effect to call the getUsers function 
useEffect(() => {
  getUsers();
  
},[])



// RENDER return 
  return (
    <React.Fragment>

{/* <button onClick={showModal}>Display Modal</button> */}
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
       
  <Modal.Title className='font-weight-bold'>{singleUser.name}</Modal.Title>
  <Modal.Title><img src={singleUser.image} className='rounded-circle border border-secondary shadow-lg row-effect'/></Modal.Title>
        </Modal.Header>
       
  <p className='ml-2 mr-2'><FontAwesomeIcon icon={faEnvelope} className='mr-2'/>{singleUser.email}</p>
  <p className='ml-2 mr-2' className='ml-2'><FontAwesomeIcon icon={faPhone} className='mr-2'/>{singleUser.phone}</p>
  <p className='ml-2 mr-2'><FontAwesomeIcon icon={faMobile} className='mr-2'/>{singleUser.cell}</p>
  <p className='ml-2 mr-2 font-weight-light'><FontAwesomeIcon icon={faAddressCard} className='mr-2'/>{singleUser.streetAddress} 
  <p className='ml-4 font-weight-light'>{singleUser.cityState}</p>   </p>
    
        <Modal.Footer>
          <button class="btn btn-secondary" onClick={hideModal}>Close</button>
        </Modal.Footer>
      </Modal>


  <div className='container'>
    {/* add search bar component and passing the users and a function for updating the state */}
  
  {/* {showCard && <UserCard data={users}/>} */}
<SearchBar data={users} updateUsers={value => setUsers(value)}/>


{/* setup the table strcuture  */}
<table className='table table-hover'>
<thead className='thead-light'>
  <tr>
    <th scope='col'></th>
    <th scope='col'>Name  <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={(e)=>{sortNamesAscending(users)}}/> 
    <FontAwesomeIcon icon={faArrowAltCircleDown} onClick={(e)=>{sortNamesDescending(users)}}/></th>
    <th scope='col'>Phone</th>
  </tr>
</thead>
<tbody>
{/* loop over users object array that was returned from the api call  */}
{users.map((user)=>{

 return <tr key={user.login.uuid} className='row-effect' 
  onClick={(e)=>{
   const image = user.picture.large
   const name = `${user.name.first} ${user.name.last}`
   const streetAddress = `${user.location.street.number} ${user.location.street.name}`
   const cityState = `${user.location.city}, ${user.location.state}, ${user.location.country}`
   const email = user.email
   const phone = user.phone
   const cell = user.cell
    // showModal(user)
    showModal(image,name,streetAddress,cityState,email,phone,cell)
   }}>
   <td ><img src={user.picture.thumbnail} alt={user.name.last} className='rounded-circle border border-secondary shadow-lg'/></td>
<td >{user.name.last},{user.name.first}</td>
<td  className=''>{user.phone}</td>
 </tr>
})}
</tbody>
</table>
</div>
    </React.Fragment>
  )
}

export default UserList