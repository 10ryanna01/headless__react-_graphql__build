import React, {useState, useEffect } from "react";


export default function Dropdown( {dddata}) {

  const handleChangeOption = (e) => {
//     if (e.target.value === "0") {
//       navigate("/basePage");
//     }
//     if (e.target.value === "1") {
//       navigate("/");
//     } 

  }; 
//   const dddata = [
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 0, name: "Istanbul, TR (AHL)"}, 
//       {id: 1, name: "Paris, FR (CDG)"}
    
    
//     ];

const [isOpen, setOpen] = useState(false);
const [items, setItem] = useState(dddata);
const [selectedItem, setSelectedItem] = useState(null);

const toggleDropdown = () => setOpen(!isOpen);

const handleItemClick = (id) => {
  selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  setOpen(!isOpen);
}


  return (
  <div>
 <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
      {selectedItem ? items.find(item => item.id == selectedItem).name : "Select your destination"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
            {item.name}
          </div>
        ))}
      </div>
</div>

<div class="select">
    <select>

    <option>Stamford Brook Underground </option>
<option>Covent Garden Underground </option>
<option>Piccadilly Circus Underground </option>
<option>Seven Sisters Underground </option>
<option>Stratford Underground </option>
<option>Vauxhall Underground </option>
<option>Westminster Underground </option>
<option>Seven Sisters Underground </option>
<option>Stratford Underground </option>
<option>Vauxhall Underground </option>
<option>Westminster Underground </option>
    </select>

    </div>

    
  </div>  
  );
}

