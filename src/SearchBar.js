import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './UserList';

const SearchBar = ({data,updateUsers}) =>{
const [searchText,setSearchText] =useState('');


const handleKeyPress = (e)=>{

  if (e.key === 'Enter') {
    onSearch(e.target.value)
  }

}

const onSearch = (searchStr)=>{
  // let searchResults = data.filter((data)=>{
  //   return data.name.last === searchStr
  // })

  let searchResults = data.filter((data)=>{
    const pattern = `^${searchStr}`
    const re = new RegExp(pattern,'gi')
    return data.name.last.match(re)
  })
 updateUsers(searchResults)
}

return (
<React.Fragment>
<div className="input-group mb-1 mt-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">Search</span>
  </div>
  <input type="text" value={searchText} 
  className="form-control" placeholder="" 
  aria-label="Search" 
  aria-describedby="search-box"
  onChange={(e)=> setSearchText(e.target.value)}
  onKeyPress={handleKeyPress}
  />
</div>
</React.Fragment>

)
}

export default SearchBar