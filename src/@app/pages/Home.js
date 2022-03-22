import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assests/pizza.jpeg";
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
        <div 
        className="headerContainer" 
        style={{backgroundImage: `url(${BannerImage})`}}
        >
            <h1>Italia's  Pizza</h1>
            <p>Delicious!</p>
            <Link to="/menu"><button>ORDER NOW</button></Link>
        </div>
    </div>
  )
}

export default Home