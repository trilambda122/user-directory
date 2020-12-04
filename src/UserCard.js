import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const UserCard = (props) =>{
console.log('------')
const user=props.users[5]
console.log(user.picture.large)
  return (
<React.Fragment>
  <div className="card container" style={{width:'18rem'}}>
    <img className='card-img-top' src={user.picture.large} alt='profile picutre' style={{width:'150px'}}/>
    <div className='card-body'>
  <h5 className='card-title'>{user.name.last}, {user.name.first}</h5>
  <p className='card-text'>{user.location.street.number} {user.location.street.name}</p>
  <p className='card-text'>{user.location.city}, {user.location.state}, {user.location.postcode}</p>
  <p className='card-text'>{user.email}</p>
  <p className='card-text'>{user.phone}</p>
    </div>



  </div>
</React.Fragment>

  )

}

export default UserCard