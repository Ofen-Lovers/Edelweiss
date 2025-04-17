import React, { useState } from 'react';
import './select.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';



const Select = ({data, placeholder, icon}) => {

    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setselectedItem] = useState(placeholder);

    const OpenSelect = () => {
        setisOpenSelect(!isOpenSelect);
    }

    const closeSelect = (index, name) => {
        setSelectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    }
    

    return (
        <ClickAwayListener onClickAway={()=>setisOpenSelect(false)}>
        <div className='selectDropWrapper cursor position-relative'>
            {icon}
            <span className='openSelect' onClick={OpenSelect}>{selectedItem} <KeyboardArrowDownIcon className='arrow'/></span>
            {
                isOpenSelect===true && 
                <div className='selectDrop'>
                <div className='searchField'>
                    <input type="text" placeholder='Search here...'/>  
                </div>
                <ul className='searchResults'>
                <li key={0} onClick={()=>closeSelect(0,placeholder)} className={`${selectedIndex===0 ? 'active' :''}`}>{placeholder}</li>


                    {
                        data.map((item, index) => {
                            return (
                                <li key={index+1} onClick={()=>closeSelect(index+1,item)} className={`${selectedIndex===index+1 ? 'active' :''}`}>{item}</li>
                            )
                        })
                    }

                </ul>
            </div>

            }
        </div>
        </ClickAwayListener>
    )
}

export default Select;