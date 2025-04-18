import React, { useState, useEffect } from "react";
import "./header.css";
import Logo from "../header/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
import axios from "axios";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';

const Header = () => {

  const [isOpenDropdown, setisOpenDropdown] = useState(false);

  const [categories, setcategories] = useState([
    "Stuff Toys",
    "Boquetes",
    "Crochets",
    "Accesories",
    "Letter",
    "Gift Box",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            countryList.push(item.country);
            // console.log(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="Logo" className="logo" />
            </div>
            {/*Header Search*/}
            <div className="col-sm-5">
              <div className="headSearch d-flex align-items-center">
                <Select
                  data={categories}
                  placeholder={"All Categories"}
                  icon={false}
                />

                <div className="search">
                  <input
                    type="text"
                    placeholder="Search for items..."
                    className="searchInput"
                  />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>

            <div className="col-sm-5 d-flex align-items-center">
              <div className="ml-auto d-flex align-items-center justify-content-between">
                <div className="countryWrapper">
                  <Select
                    data={countryList}
                    placeholder={"Your Location"}
                    icon={
                      <LocationOnOutlinedIcon style={{ color: "ff2b8e" }} />
                    }
                  />
                </div>

                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span>
                      <CompareArrowsOutlinedIcon className="compare-icon" />
                      <span className="badge rounded-circle">3</span>
                      Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <FavoriteBorderOutlinedIcon className="compare-icon" />
                      <span className="badge rounded-circle">4</span>
                      Favorite
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span>
                      <ShoppingCartOutlinedIcon className="compare-icon" />
                      <span className="badge rounded-circle">1</span>
                      Cart
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span onClick={() => setisOpenDropdown(!isOpenDropdown)}>
                    <AccountCircleOutlinedIcon className="compare-icon" />
                      <span className="badge rounded-circle"></span>
                      Account
                    </span>
                    {
                      isOpenDropdown !== false &&
                      <ul className="dropdownMenu">
                      <li><Button className="align-items-center"><AccountCircleIcon/>My Account</Button></li>
                      <li><Button><DeliveryDiningIcon/>Order Tracking</Button></li>
                      <li><Button><ConfirmationNumberIcon/>Voucher</Button></li>
                      <li><Button><FavoriteIcon/>Favorite</Button></li>
                      <li><Button><SettingsIcon/>Setting</Button></li>
                      <li><Button><ExitToAppIcon/>Sign out</Button></li>
                    </ul>

                    }

                  </li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
