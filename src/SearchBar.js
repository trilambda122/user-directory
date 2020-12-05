import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({data,updateVisUsers}) =>{
const [searchText,setSearchText] =useState('');


const onSearch = (searchStr)=>{
  const searchResults = data.filter((item)=>{
    const pattern = `^${searchStr}`
    const re = new RegExp(pattern,'gi')
    return item.name.last.match(re)
  })
 updateVisUsers(searchResults)
}

return (
<React.Fragment>
<div className="input-group mb-1 mt-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1" onClick={()=>{window.location.href='/hw19-user-directory'}}><FontAwesomeIcon icon={faHome}/></span>
  </div>
  <input type="text" value={searchText} 
  className="form-control" placeholder="Seach by lastname" 
  aria-label="Search" 
  aria-describedby="search-box"
  onChange={(e)=>{
    setSearchText(e.target.value)
    onSearch(e.target.value)
  }}
 
  />
</div>
</React.Fragment>

)
}

export default SearchBar