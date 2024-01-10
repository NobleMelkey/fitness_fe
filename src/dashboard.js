import React from "react";
import logo from './pic/Lovepik_com-401147273-dumbbell.png';
import chart from './pic/bmi-chart (1).jpg';
import first from './pic/pngimg.com - bodybuilding_PNG92.png'

import { useNavigate } from "react-router-dom";
import food from './pic/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg';
import workout from './pic/gladiator.jpg';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(`/${route}`);
  }

  return (
    <div>
      <header className="header">
        <nav>
          <div className="nav__header">
            <div className="nav__logo">
              <a href="#"><img src={logo} alt="logo" />MuscleBuddy</a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <span><i className="ri-menu-line" /></span>
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li className="link"><a href="#home" onClick={() => handleClick('deshboard')}>Home</a></li>
            <li className="link"><a href="#about" onClick={() => handleClick('Workout')}>Workouts</a></li>
            <li className="link"><a href="#class" onClick={() => handleClick('Food')}>Foods</a></li>
            <li className="link"><a href="#trainer" onClick={() => handleClick('myworkout')}> My workouts</a></li>
            <li className="link"><a href="#price">My Foods</a></li>
            <li><button className="btn" id="form-open">Profile</button></li>
          </ul>
        </nav>
        <div className="section__container header__container" id="home">
            <div className="header__image">
              <img src={first} alt="header" />
            </div>
            <div className="header__content">
              <h4>Build Your Body &amp;</h4>
              <h1 className="section__header">Shape Yourself!</h1>
              <h3 className="section__header">For FREE </h3>
              <p>
                Unleash your potential and embark on a journey towards a stronger,
                fitter, and more confident you. Sign up for 'Make Your Body Shape'
                now and witness the incredible transformation your body is capable
                of!
              </p>
              <div className="header__btn">
                <button className="btn">Join Today</button>
              </div>
            </div>
            
          </div>
      </header>
      {/* Centered container */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ textAlign: 'center', marginRight: '20px' }}>
          <h2>Workouts Plan</h2>
          <img src={workout} alt="Workout Plan" style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
          <p>Your personalized fitness assistant</p>
          <button className="btn" onClick={() => handleClick('AddWorkout')}>Add Workout</button>
        </div>
        <div style={{ textAlign: 'center', marginRight: '20px' }}>
          <h2>Food Plan</h2>
          <img src={food} alt="Food Plan" style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
          <p>Your personalized nutrition assistant</p>
          <button className="btn" onClick={() => handleClick('AddFood')}>Add Food</button>
        </div>
        
      </div>
      <div class="center-wrapper">
    <div class="BMIcontainer">
      <img src={chart} alt="BMI" />
      <h1 className="Bf">BMI Calculator</h1>
      <p>Height (cm)</p>
      <input className="bmiin" type="number" id="height"></input>
      <p>Weight (kg)</p>
      <input className="bmiin" type="number" id="weight"></input>
      <button className="bmib" id="btn">Calculate</button>
      <div id="result"></div>
    </div>
  </div>
      
  
    </div>
  )
}

export default Dashboard;
