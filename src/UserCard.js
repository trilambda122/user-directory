import React, {useState,useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css'

const UserCard = ({data,getUser}) =>{
console.log('---USER CARD ---')

const user=data[0]
console.log(getUser)

const [isOpen, setIsOpen] = React.useState(false);

const showModal = () => {
  setIsOpen(true);
};

const hideModal = () => {
  setIsOpen(false);
};
  return (
<React.Fragment>
<button onClick={showModal}>Display Modal</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>


  {/* <div className="card container mt-3" style={{width:'18rem'}}>
    <img className='card-img-top mt-1 shadow-lg border-dark rounded mx-auto' src={user.picture.large} alt='profile picutre' style={{width:'150px'}}/>
    <div className='card-body border rounded mt-2 mb-2'>
  <h5 className='card-title'>{user.name.last}, {user.name.first}</h5>
  <p className='card-text text-left'>{user.location.street.number} {user.location.street.name}</p>
  <p className='card-text'>{user.location.city}, {user.location.state}, {user.location.postcode}</p>
  <p className='card-text'>{user.email}</p>
  <p className='card-text'>{user.phone}</p>
    </div>
  </div> */}
</React.Fragment>

  )

}

export default UserCard