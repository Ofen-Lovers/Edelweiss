import React from 'react';
import './header.css';
import Logo from '../header/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
    return (
        <>
        <header>
            <div className='container-fluid'>
                <div className='row'>
                        <div className='col-sm-2'>
                            <img src={Logo} alt="Logo" className='logo' />
                        </div>
{/*Header Search*/}
                        <div className='col-sm-5'>
                            <div className='headSearch d-flex align-items-center'>
                                <div className='selecrDrop cursor'>
                                All catergories 
                                </div>

                                <div className='search'>
                                    <input type="text" placeholder='Search' className='searchInput' />
                                    <SearchIcon className='searchIcon cursor'/>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </header>
        </>
    )
}

export default Header;