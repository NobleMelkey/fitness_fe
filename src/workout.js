import React from "react";
import { useNavigate } from "react-router-dom";
import logo from './pic/Lovepik_com-401147273-dumbbell.png';
import '../src/workout.css';

const Workout =()=>{
    const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(`/${route}`);
  }
    return(
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
            <li className="link"><a href="#class"onClick={() => handleClick('food')}>Foods</a></li>
            <li className="link"><a href="#trainer" onClick={() => handleClick('myworkout')}>My workouts</a></li>
            <li className="link"><a href="#price">My Foods</a></li>
            <li><button className="btn" id="form-open" >Profile</button></li>
          </ul>
        </nav>
        </header>
        <table className="table">
    <thead>
      <tr>
        <th>Day</th>
        <th>Muscle</th>
        <th>Description</th>
        <th>Time</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody><tr>
  
     
      <td>
  hi
</td>
<td>
  9koo
</td>

<td>
  k,k,
</td>
<td>
k,mk
</td>
    </tr>

</tbody>

  </table>
        </div>
    )
}

export default Workout;