import React, { useState } from 'react';
import './select.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';



const Select = ({data, placeholder, icon}) => {

    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setselectedItem] = useState(placeholder);

    const [listData, setListData] = useState(data);
    const [listData2, setListData2] = useState(data);


    const OpenSelect = () => {
        setisOpenSelect(!isOpenSelect);
    }

    const closeSelect = (index, name) => {
        setSelectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    }

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        const list = listData2.filter((item) => {
            return item.toLowerCase().includes(keyword);

        })

        const list2 = list.filter((item,index) => list.indexOf(item)===index);

        setListData(list2);  

    }
    

    return (
        <ClickAwayListener onClickAway={()=>setisOpenSelect(false)}>
        <div className='selectDropWrapper cursor position-relative'>
            {icon}
            <span className='openSelect' onClick={OpenSelect}>{selectedItem.length>14 ? selectedItem.substr(0,11)+'...' : selectedItem} <KeyboardArrowDownIcon className='arrow'/></span>
            {
                isOpenSelect===true && 
                <div className='selectDrop'>
                <div className='searchField'>
                    <input type="text" placeholder='Search here...' onChange={filterList}/>  
                </div>
                <ul className='searchResults'>
                <li key={0} onClick={()=>closeSelect(0,placeholder)} className={`${selectedIndex===0 ? 'active' :''}`}>{placeholder}</li>


                    {
                        listData.map((item, index) => {
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