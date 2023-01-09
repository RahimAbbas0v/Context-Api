import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useContext } from 'react';
import axios from 'axios'
import './Navbar.css'
import { Button } from 'reactstrap';
import { Context } from '../../Context/Favoriteproduct';


function Navbar() {
    const { list,setList } = useContext(Context);
    const { count } = useContext(Context);
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active" id="homeli">
        <Link to={"/"} id="homepage">Home</Link>
        </li>
        <li class="nav-item" id="favli">
        <Link to={"favourite"} id="favlipage">Favorite<sup className='fav_count' id="favor">{count}</sup></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar