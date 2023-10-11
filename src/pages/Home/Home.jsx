import React from 'react'
import { useContext } from 'react';
import { UserNameContext } from '../../context/UserNameContext';
import "./Home.css";
import { useLocation, useNavigate } from 'react-router-dom';
import UserNameForm from '../../components/home/UserNameForm/UserNameForm';
import MyImage from "../../components/MyImage/pokeball.gif"

const Home = () => {
const navigate = useNavigate();
const location = useLocation(); 
const from = location.state?.from ?? "/pokedex";
const { saveUserName } = useContext(UserNameContext);

const handleSendName = (userNameValue) => {
 saveUserName (userNameValue);
 navigate (from);
};


  return (
    <section>
      <div className='logo-container'>
      <img src='https://assets.stickpng.com/images/612ce4761b9679000402af1c.png'></img>
      </div>
    <h1 className='home_title'>Hello Trainer</h1>
    <p className='home_description'>To start, please write your name</p>
    
    
    <div className='home_form-container'>
      <UserNameForm onSendName={(userNameValue) => handleSendName(userNameValue)} />
    </div>
    <img className='pokeball_img' src={MyImage} alt="pokeball" />
    </section>
  );
};

export default Home