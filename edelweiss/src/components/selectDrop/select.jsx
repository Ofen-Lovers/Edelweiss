import React, { useState } from 'react';
import './select.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

const Select = () => {

    const [isOpenSelect, setOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const OpenSelect = () => {
        setOpenSelect(!isOpenSelect);
    }

    const closeSelect = (index) => {
        setSelectedIndex(index);
    }
    

    return (
        <div className='selectDropWrapper cursor position-relative'>
            <span className='openSelect' onClick={OpenSelect}>All Categories</span>
            {
                isOpenSelect===true && 
                <div className='selectDrop'>
                <div className='searchField'>
                    <input type="text"/>  
                </div>

                <ul className='searchResults'>
                        <li onClick={()=>closeSelect(0)}>All Categories</li>
                        <li onClick={()=>closeSelect(1)}>Stuff Toys</li>
                        <li onClick={()=>closeSelect(2)}>Boquetes</li>
                        <li onClick={()=>closeSelect(3)}>Crochets</li>
                        <li onClick={()=>closeSelect(4)}>Accesories</li>
                        <li onClick={()=>closeSelect(5)}>Letter</li>
                        <li onClick={()=>closeSelect(6)}>Gift Box</li>
                </ul>
            </div>

            }
        </div>
    )
}

export default Select;