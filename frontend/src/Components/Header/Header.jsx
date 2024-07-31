import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    Home,
    Search,
    AccountCircle,
    Add,
    HomeOutlined,
    SearchOutlined,
    AccountCircleOutlined,
    AddOutlined,

} from "@mui/icons-material"
const Header = () => {
    const [Tab,setTab] = useState(window.location.pathname);
  return (
    console.log(Tab),
    <div className='header'>

      <Link  to ="/" onClick={() => setTab("/")}>{ Tab === "/" ? <Home style={{color:"black"}}/> : <HomeOutlined/>}</Link>

      <Link  to ="/search" onClick={() => setTab("/search")}>{ Tab === "/search" ? <Search style={{color:"black"}}/> : <SearchOutlined/>}</Link>

      <Link  to ="/newpost" onClick={() => setTab("/newpost")}>{ Tab === "/newpost" ? <Add style={{color:"black"}}/> : <AddOutlined/>}</Link>

      <Link  to ="/account" onClick={() => setTab("/account")}>{ Tab === "/account" ? <AccountCircle style={{color:"black"}}/> : <AccountCircleOutlined/>}</Link>

    </div>
  )
}

export default Header;
