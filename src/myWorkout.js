import {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import logo from './pic/Lovepik_com-401147273-dumbbell.png';
import '../src/workout.css';
import axios from "axios";

const MyWorkout = () => {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [exercises, setExercises] = useState([]);
    const [scheduleData, setScheduleData] = useState([]);
    const [workoutSchedules, setWorkoutSchedules] = useState([]);
    const [muscleNames, setMuscleNames] = useState([]);
  const [newExercise, setNewExercise] = useState({ day: '', muscle: '', description: '', time: '' });
  const [inputValue, setInputValue] = useState('');
  const [suggestedTags, setSuggestedTags] = useState([]);
  const [suggestedWorkout, setsuggestedWorkout] = useState([]);

  
   
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:6001/fetchworkout");
        setWorkoutData(response.data);
      } catch (error) {
        console.error("Error fetching workout data:", error);
      }
    };

    fetchData();
  }, []);

    
  useEffect(() => {
    const fetchMuscleNames = async () => {
      try {
        const response = await axios.get('http://localhost:6001/muscle-name');
        console.log("API Response:", response.data); // Log the API response
        setMuscleNames(response.data);
      } catch (error) {
        console.error('Error fetching muscle names:', error);
      }
    };

    fetchMuscleNames();
  }, []);

  useEffect(() => {
    setSuggestedTags(muscleNames);
  }, [muscleNames]);


  const [workoutDetails, setWorkoutDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:6001/workoutdetails');
        setWorkoutDetails(response.data);
      } catch (error) {
        console.error('Error fetching workout details:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setsuggestedWorkout(workoutDetails);
  }, [workoutDetails]);
 

  console.log("Muscle Names:", muscleNames); // Log the muscleNames state

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setInputValue(e.target.value);
    setNewExercise((prevExercise) => ({
      ...prevExercise,
      [name]: value,
    }));
  };

    const handleClick = (route) => {
      navigate(`/${route}`);
    };
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExercise((prevExercise) => ({
          ...prevExercise,
          [name]: value,
        }));
      };
  
    const handleAddExercise = (e) => {
      e.preventDefault();
      setExercises((prevExercises) => [...prevExercises, newExercise]);
      setNewExercise({ day: '', muscle: '', description: '', time: '' });
      setIsPopupOpen(false);
    };
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setNewExercise((prevExercise) => ({
        ...prevExercise,
        [name]: checked,
      }));
    };
  
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
            <li className="link"><a href="#class" onClick={() => handleClick('food')}>Foods</a></li>
            <li className="link"><a href="#trainer" onClick={() => handleClick('myworkout')}>My workouts</a></li>
            <li className="link"><a href="#price">My Foods</a></li>
            <li><button className="btn" id="form-open">Profile</button></li>
          </ul>
        </nav>
      

        </header>
        <button className="btn" onClick={openPopup}>Add Exercise</button>
      {isPopupOpen && (
        <div className="popup">
        <h2>Add Exercise</h2>
        <form onSubmit={handleAddExercise}>
          <div className="form-group">
            <label htmlFor="day">Date:</label>
            <input
              type="text"
              id="day"
              name="day"
              value={newExercise.date}
              onChange={handleInputChange}
              list="suggestedate"
            />
            <datalist id="suggestedate">
          {suggestedWorkout.map((workouts, index) => (
            <option key={index} value={workouts.date} />
          ))}
        </datalist>
          </div>
          <div className="form-group">
        <label htmlFor="muscle">Muscle:</label>
        <input
          type="text"
          id="muscle"
          name="muscle"
          value={newExercise.muscle}
          onChange={handleInputChange}
          list="suggestedTags"
        />
        <datalist id="suggestedTags">
          {suggestedTags.map((muscles, index) => (
            <option key={index} value={muscles.muscle_name} />
          ))}
        </datalist>
      </div>
          <div className="form-group">
            <label htmlFor="muscle">Workout:</label>
            <input
              type="text"
              id="Workout"
              name="Workout"
              value={newExercise.Workout}
              onChange={handleInputChange}
              list="suggested"
            />
            <datalist id="suggested">
          {suggestedWorkout.map((workouts, index) => (
            <option key={index} value={workouts.workout_name} />
          ))}
        </datalist>
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={newExercise.description}
              onChange={handleInputChange}
              list="suggesteddes"
            />
            <datalist id="suggesteddes">
          {suggestedWorkout.map((workouts, index) => (
            <option key={index} value={workouts.description} />
          ))}
        </datalist>
          </div>
          
          <div className="form-group">
            <label htmlFor="Comments">Quantity:</label>
            <input
              type="text"
              id="Comments"
              name="Comments"
              value={newExercise.Comments}
              onChange={handleInputChange}
              list="suggestedquan"
              />
              <datalist id="suggestedquan">
            {suggestedWorkout.map((workouts, index) => (
              <option key={index} value={workouts.quantity} />
            ))}
          </datalist>
          </div>
            <button type="submit">Add</button>
            <button type="button" onClick={closePopup}>Cancel</button>
          </form>
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            
            <th>Muscle</th>
            <th>Workout</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>accumulated quantity</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {workoutData.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.date}</td>
              <td>{schedule.muscle_name}</td>
              <td>{schedule.workout_name}</td>
              <td>{schedule.description}</td>
              <td>{schedule.quantity}</td>
              <td>{schedule.accumalated_quantity}<input
                  type="text"
                  name="commant"
                  value={schedule.commant}
                  onChange={(e) => handleInputChange(e, index)}
                /></td>
              <td>{schedule.commant}<input
                  type="text"
                  name="commant"
                  value={schedule.commant}
                  onChange={(e) => handleInputChange(e, index)}
                /></td>
              
              <td> <input
                  type="checkbox"
                  name="status"
                  checked={schedule.status}
                  onChange={(e) => handleCheckboxChange(e, index)}
                /></td>
              <td>Edit / Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyWorkout;