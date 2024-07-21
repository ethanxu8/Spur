// Importing necessary libraries and components
import { React, useEffect } from 'react'; // Importing React and the useEffect hook from React
import { useSelector, useDispatch } from "react-redux"; // Importing useSelector, and useDispatch from Redux
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing routing components from React Router
import Navbar from './components/navbar/Navbar'; // Importing the Navbar component
import Profile from './components/profile/Profile'; // Importing the Profile component
import Upcoming from './components/upcoming/Upcoming';
import Home from './components/home/Home'; // Importing the Home component
import { auth } from './firebase'; // Importing Firebase authentication module
import { loginUser, setLoading } from './features/userSlice'; // Importing actions from our user slice in Redux


const App = () => {
  // Using useSelector to get the current user from the Redux store
  const user = useSelector(state => state.data.user);

  // Using useDispatch to create a dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  // useEffect is a React hook that runs a piece of code when the component mounts or updates
  useEffect(() => {
    // This function runs when the authentication state changes (like when a user logs in or out)
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // If a user is logged in, dispatch the loginUser action with the user's information
        dispatch(loginUser({
          uid: authUser.uid, // User ID
          username: authUser.displayName, // User's display name
          email: authUser.email, // User's email
        }));
        // Dispatch the setLoading action to set loading state to false
        dispatch(setLoading(false));
      } else {
        // If no user is logged in, log a message to the console
        console.log("User is not logged in");
      }
    });
  }, []); // The empty array means this effect runs only once, when the component first mounts

  // The return statement defines what the component renders
  return (
    <Router> {/* The Router component enables routing in our app */}
      <div className="app">
        <div className="content">
          <Routes> {/* The Routes component contains all the Route definitions */}
            <Route path="/" element={<Home />} /> {/* Route for the Home component at the root path */}
            <Route path="/profile" element={<Profile />} /> {/* Route for the Profile component at the /profile path */}
            <Route path="/upcoming" element={<Upcoming />} /> {/* Route for the Upcoming component */}
          </Routes>
        </div>
        <div className="nav-bottom">
          <Navbar /> {/* Render the Navbar component at the bottom of every page */}
        </div>
      </div>
    </Router>
  );
}

// Exporting the App component so it can be used in other parts of the application
export default App;
