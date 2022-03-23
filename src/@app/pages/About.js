import React from 'react';
import MultiplePizza from "../assests/multiple.jpeg"; 
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizza})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
               This is paragraph about us.This is paragraph about us.
            </p>
        </div>
    </div>
  )
}

export default About;