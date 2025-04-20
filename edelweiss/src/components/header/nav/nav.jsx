import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockIcon from '@mui/icons-material/Lock';
import LockResetIcon from '@mui/icons-material/LockReset';
import SellIcon from '@mui/icons-material/Sell';
import PolicyIcon from '@mui/icons-material/Policy';



const Nav =()=> {
    return( 
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-sm-3 part1 d-flex align-items-center">
                        <Button className="catTab"><GridViewIcon/> &nbsp;Browse All Catrgories<KeyboardArrowDownIcon/></Button>
                    </div>
                     <div className="col-sm-7 part2">
                        <nav>
                            <ul className="list list-inline mb-0">
                                <li className="list-inline-item">
                                    <Button><Link>Home</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>About</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Shop<KeyboardArrowDownIcon/></Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Vendors<KeyboardArrowDownIcon/></Link></Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button><Link to="/about"></Link><InfoIcon/>About Us</Button></li>
                                            <li><Button><Link to="/about"></Link><MailIcon/>Contact Us</Button></li>
                                            <li><Button><Link to="/about"></Link><AccountCircleIcon/>My Account</Button></li>
                                            <li><Button><Link to="/about"></Link><LoginIcon/>Login</Button></li>
                                            <li><Button><Link to="/about"></Link><HowToRegIcon/>Register</Button></li>
                                            <li><Button><Link to="/about"></Link><LockIcon/>Forgot Password</Button></li>
                                            <li><Button><Link to="/about"></Link><LockResetIcon/>Reset Password</Button></li>
                                            <li><Button><Link to="/about"></Link><SellIcon/>Purchase Guide</Button></li>
                                            <li><Button><Link to="/about"></Link><PolicyIcon/>Privacy Policy</Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Blog<KeyboardArrowDownIcon/></Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link>Pages<KeyboardArrowDownIcon/></Link>
                                    </Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button><Link to="/about"></Link><InfoIcon/>About Us</Button></li>
                                            <li><Button><Link to="/about"></Link><MailIcon/>Contact Us</Button></li>
                                            <li><Button><Link to="/about"></Link><AccountCircleIcon/>My Account</Button></li>
                                            <li><Button><Link to="/about"></Link><LoginIcon/>Login</Button></li>
                                            <li><Button><Link to="/about"></Link><HowToRegIcon/>Register</Button></li>
                                            <li><Button><Link to="/about"></Link><LockIcon/>Forgot Password</Button></li>
                                            <li><Button><Link to="/about"></Link><LockResetIcon/>Reset Password</Button></li>
                                            <li><Button><Link to="/about"></Link><SellIcon/>Purchase Guide</Button></li>
                                            <li><Button><Link to="/about"></Link><PolicyIcon/>Privacy Policy</Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Contact</Link></Button>
                                </li>
                            </ul>
                        </nav>
                     </div>
                     <div className="col-sm-2 part3 d-flex align-items-center"> 
                        <div className="phnNo d-flex align-items-center ml-auto">
                            <span><HeadsetMicIcon/></span>
                            <div className="info ml-3">
                                <h3 className="text-g">8900-129</h3>
                                <p className="mb-0">Share Your Feedback</p>
                            </div>
                        </div>

                     </div>
                </div>
            
            </div>
        </div>

    )
}


export default Nav;